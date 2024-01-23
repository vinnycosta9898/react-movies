import Link from "next/link";
import { GetServerSideProps } from "next";
import { Header } from "@/components/Header";
import { apiMovies } from "@/lib/axios";
import { MovieCard } from "@/components/MovieCard";

interface MovieProps{
  movies:{
    id: string
    poster_path: string
    title: string
  }[]
}

export default function Home({ movies } : MovieProps){   
  return(
    <div className="min-w-screen min-h-screen bg-black flex flex-col justify-center">
      <Header/>
      <div className="w-full h-full items-center justify-center">
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

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await apiMovies.get('/movie/now_playing', {
    params:{
      api_key: process.env.API_KEY_TMDB,
      language: 'pt-br'
    }
  })

  const movies = response.data.results.slice(0, 12)
  
  return{
    props:{
      movies
    }
  }
}