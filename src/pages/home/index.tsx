import Link from 'next/link'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'

import { FiSearch } from 'react-icons/fi'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { apiMovies } from '@/lib/axios'

import { MovieCard } from '@/components/MovieCard'
import { Paginate } from '@/components/Paginate'
import { useEffect, useState } from 'react'
import { GenreButtons } from '@/components/GenreButtons'

import { Skeleton } from '@mui/material'

interface MovieProps {
  movies: {
    id: string
    poster_path: string
    title: string
  }[]
}

const formMovieSchema = z.object({
  movie: z
    .string()
    .min(2, { message: 'O filme precisa ter no mínimo 2 letras' }),
})

type FormMovieData = z.infer<typeof formMovieSchema>

export default function Home({ movies }: MovieProps) {
  const [isLoading, setIsLoading] = useState(true)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormMovieData>({
    resolver: zodResolver(formMovieSchema),
  })

  const router = useRouter()

  async function handleSearchMovie(movie: FormMovieData) {
    router.push(`search/${movie.movie}`)
  }

  useEffect(() => {
    movies ? setIsLoading(false) : setIsLoading(true)
  }, [isLoading])

  return (
    <div className="min-w-screen min-h-screen bg-black flex flex-col items-center">
      <div className="w-full h-full items-center justify-center">
        <div className="text-white font-bold flex flex-col items-center mb-8">
          <h1 className="text-white text-3xl my-4">Filmes no cinema</h1>
          <GenreButtons />
          <form
            className="flex gap-2"
            onSubmit={handleSubmit(handleSearchMovie)}
          >
            <input
              type="text"
              placeholder="Busque um filme"
              className="min-w-64 h-10 rounded-lg bg-gray_300 outline-none px-1 text-gray_100 placeholder:text-gray_100"
              {...register('movie')}
            />
            <button className="w-8 h-10 bg-gray_300 rounded-lg flex items-center justify-center">
              <FiSearch color="#696969" />
            </button>
          </form>
          {errors.movie ? (
            <span className="text-danger mt-2">{errors.movie.message}</span>
          ) : null}
        </div>
        <div className="w-full h-full grid grid-cols-5 xlg:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 xsm:grid-cols-1">
          {movies.length > 0 &&
            movies.map((movie) => {
              return (
                <div className="flex flex-col items-center" key={movie.id}>
                  <Link href={`/movie/${movie.id}`}>
                    {isLoading ? (
                      <Skeleton
                        width={320}
                        height={480}
                        variant="rounded"
                        animation="wave"
                        sx={{ bgcolor: 'grey.900' }}
                      />
                    ) : (
                      <MovieCard
                        id={movie.id}
                        poster_path={movie.poster_path}
                        title={movie.title}
                      />
                    )}
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

export const getStaticProps: GetStaticProps = async () => {
  try {
    const response = await apiMovies.get('/movie/now_playing')

    const movies = response.data.results.slice(0, 12)

    return {
      props: {
        movies,
      },
      revalidate: 60 * 60 * 24 * 7, // 7 days
    }
  } catch (err) {
    return {
      props: {
        movies: [],
      },
    }
  }
}
