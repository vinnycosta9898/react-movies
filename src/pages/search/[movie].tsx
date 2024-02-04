import Head from 'next/head'
import Link from 'next/link'
import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'

import { MovieCard } from '@/components/MovieCard'
import { FiSearch } from 'react-icons/fi'
import { zodResolver } from '@hookform/resolvers/zod'

import { apiMovies } from '@/lib/axios'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { useState } from 'react'
import { Skeleton, dividerClasses } from '@mui/material'

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
    .trim()
    .min(2, { message: 'O filme precisa ter no mínimo 2 letras' }),
})

type FormMovieData = z.infer<typeof formMovieSchema>

export default function Search({ movies }: MovieProps) {
  const [isLoading, setIsLoading] = useState(true)
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormMovieData>({
    resolver: zodResolver(formMovieSchema),
  })

  const router = useRouter()
  const movie = router.query

  async function handleSearchMovie(movie: FormMovieData) {
    router.push(`/search/${movie.movie}`)
  }

  return (
   <div className="min-w-screen min-h-screen">
    <Head>
      <title>React Movies | {movie.movie}</title>
    </Head>
    <div>
      <div className="w-full flex justify-center ">
        <h1 className="text-3xl text-white font-bold mt-8">Resultados de {movie.movie}</h1>
      </div>
      <div className="w-full flex justify-center">
        <form className="flex gap-2 mt-8" onSubmit={handleSubmit(handleSearchMovie)}>
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
      </div>
      <div className="flex justify-center m-2">
        {errors.movie && ( <span className="text-danger mt-2">{errors.movie.message}</span> )}
      </div>
    </div>
    
    <div className="flex flex-col items-center">
      <div className="grid grid-cols-4 gap-8 xlg:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 xsm:grid-cols-1">
        {movies.length > 0 ? (
            movies.map((movie) => (
              <Link href={`/movie/${movie.id}`} key={movie.id}>
                <MovieCard
                  id={movie.id}
                  key={movie.id}
                  poster_path={movie.poster_path}
                  title={movie.title}
                />
              </Link>
            ))
        ) : (
          <div className="w-screen">
            <div className="w-full flex flex-col items-center mt-16">
              <h1 className="text-white text-4xl font-bold overflow-hidden">Nenhum filme foi encontrado...</h1>
              <Link href="/home" className="text-xl text-blue">Clique aqui para voltar para a página de Inicio</Link>
            </div>
          </div>
        )}
      </div>
    </div>
   </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { movie: '955916' } }],
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps<any, { movie: string }> = async ({
  params,
}) => {
  const movie = params?.movie

  try {
    const response = await apiMovies.get('/search/movie', {
      params: {
        query: movie,
      },
    })

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
