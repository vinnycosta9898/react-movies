import Link from "next/link";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";

import { FiSearch } from "react-icons/fi";
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";

import { apiMovies } from "@/lib/axios";

import { MovieCard } from "@/components/MovieCard";
import { Paginate } from "@/components/Paginate";

import { matchGenreMovieByGenreId } from "@/utils/matchGenreMovieByUrl";
import { GenreButtons } from "@/components/GenreButtons";


interface GenreProps{
  movies:{
    id: string
    poster_path: string
    title: string
  }[]
}

const formMovieSchema = z.object({
  movie: z.string().min(2, { message: 'O filme precisa ter no mínimo 2 letras'})
})

type FormMovieData = z.infer<typeof formMovieSchema>

export default function GenrePage({ movies } : GenreProps){  
  const { 
    register, 
    handleSubmit, 
    formState: { errors } 
    } = useForm<FormMovieData>({
        resolver: zodResolver(formMovieSchema)
    })


  const router = useRouter()
  const { genreId, page } = router.query
  
  async function handleSearchMovie(movie: FormMovieData){
    router.push(`search/${movie.movie}`)
  }
  
  return(
    <div className="min-w-screen min-h-screen bg-black flex flex-col justify-center">
      <div className="w-full h-full items-center justify-center">
        <div className="text-white font-bold flex flex-col items-center mb-8">
          <h1 className="text-white text-3xl my-4">{matchGenreMovieByGenreId(Number(genreId))}</h1>
          <GenreButtons/>
          <form className="flex gap-2" onSubmit={handleSubmit(handleSearchMovie)}>
            <input 
              type="text" 
              placeholder="Busque um filme" 
              className="w-96 h-10 rounded-lg bg-gray_300 outline-none px-1 text-gray_100 placeholder:text-gray_100" 
              {...register('movie')}
            />
            <button className="w-8 h-10 bg-gray_300 rounded-lg flex items-center justify-center">
              <FiSearch color="#696969"/>
            </button>
          </form>
          {errors.movie? <span className="text-danger mt-2">{errors.movie.message}</span> : null}
        </div>
          <div className="w-full h-full grid grid-cols-3 gap-4">
            {movies.length > 0 && movies.map((movie) => {
              return(
                <div className="flex flex-col items-center" key={movie.id}>
                  <Link href={`/movie/${movie.id}`}>
                    <MovieCard
                      id={movie.id}
                      poster_path={movie.poster_path}
                      title={movie.title}
                    />
                  </Link>
                </div>
              )
          })}
          </div>
      </div>
      <footer className="w-full flex justify-center">
        <Paginate
          withGenre={true}
          genreId={String(genreId)}
        />
      </footer>      
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return{
    paths: [
      { 
        params: {
          genreId: '12',
          page: '3'
        }
      }
    ],
    fallback :'blocking'
  }
}


export const getStaticProps: GetStaticProps<any, { genreId: string, page: string}> = async ({ params }) => {
  const genreId = params?.genreId
  const page = params?.page

  console.log(genreId)
  console.log(page)

  try{
    const response = await apiMovies.get('/discover/movie', {
      params:{
        api_key: process.env.API_KEY_TMDB,
        language: 'pt-br',
        with_genres: genreId,
        page: page
      }
    })
  
    const movies = response.data.results.slice(0, 12)
  
    return{
      props:{
        movies
      },
      revalidate: 60 * 60 * 24 * 7 // 7 days
    }
  }catch(err){
    return{
      props:{
        movies: []
      }
    }
  }
}
