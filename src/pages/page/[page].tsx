import Link from 'next/link'
import { GetServerSideProps } from 'next'
import { apiMovies } from '@/lib/axios'
import { MovieCard } from '@/components/MovieCard'
import { Paginate } from '@/components/Paginate'
import { GenreButtons } from '@/components/GenreButtons'

interface MovieProps {
  movies: {
    id: string
    poster_path: string
    title: string
  }[]
}

export default function Page({ movies }: MovieProps) {
  return (
    <div className="min-w-screen min-h-screen bg-black flex flex-col justify-center">
      <div className="w-full h-full flex flex-col items-center justify-center">
        <h1 className="text-white text-3xl font-bold my-4">Filmes no cinema</h1>
        <GenreButtons />
        <div className="w-full h-full grid grid-cols-5 xlg:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 xsm:grid-cols-1">
          {movies.length > 0 &&
            movies.map((movie) => {
              return (
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
        <Paginate />
      </footer>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps<
  any,
  { page: string }
> = async ({ params }) => {
  const page = params?.page

  try {
    const response = await apiMovies.get('/movie/now_playing', {
      params: {
        page,
      },
    })

    const movies = response.data.results.slice(0, 12)

    return {
      props: {
        movies,
      },
    }
  } catch (err) {
    return {
      props: {
        movies: [],
      },
    }
  }
}
