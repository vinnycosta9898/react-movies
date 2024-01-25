import Link from "next/link";
import { GetStaticPaths, GetStaticProps } from "next";
import { Header } from "@/components/Header";
import { apiMovies } from "@/lib/axios";
import { MovieCard } from "@/components/MovieCard";
import { FiSearch } from "react-icons/fi";
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/router";

interface MovieProps{
  movies:{
    id: string
    poster_path: string
    title: string
  }[]
}

const formMovieSchema = z.object({
  movie: z.string().trim().min(2, { message: 'O filme precisa ter no mínimo 2 letras'})
})

type FormMovieData = z.infer<typeof formMovieSchema>

export default function Search({ movies } : MovieProps){   
  const { 
      register, 
      handleSubmit, 
      formState: { errors } 
      } = useForm<FormMovieData>({
          resolver: zodResolver(formMovieSchema)
      })

    const router = useRouter()

    async function handleSearchMovie(movie: FormMovieData){
      router.push(`/search/${movie.movie}`)
    }

  return(
    <div className="min-w-screen min-h-screen bg-black flex flex-col justify-center">
      <Header/>
      <div className="w-full h-full items-center justify-center">
        <div className="text-white font-bold flex flex-col items-center mb-8">
          <h1 className="text-white text-3xl my-4">Filmes no cinema</h1>
          <form className="flex gap-2" onSubmit={handleSubmit(handleSearchMovie)}>
            <input 
              type="text" 
              placeholder="Busque um filme" 
              className="w-96 h-10 rounded-lg bg-gray_300 outline-none px-1 text-gray_100 placeholder:text-gray_100" 
              {...register('movie')}
            />
            <button className="w-8 h-10 bg-gray_300 rounded-lg flex items-center justify-center">
              <FiSearch/>
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
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return{
    paths: [
      { params: {movie: '955916'} }
    ],
    fallback : 'blocking'
  }
}

export const getStaticProps: GetStaticProps<any, { movie: string}> = async ({ params }) => {
  const movie = params?.movie

  try{
    const response = await apiMovies.get('/search/movie', {
      params:{
        api_key: process.env.API_KEY_TMDB,
        language: 'pt-br',
        query: movie
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
