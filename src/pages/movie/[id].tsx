import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { GetStaticPaths, GetStaticProps } from 'next'

import { apiMovies } from '@/lib/axios'
import { MovieInfoCard } from '@/components/MovieInfoCard'

import { formatDate } from '@/utils/formatDate'
import { formatCurrency } from '@/utils/formatCurrency'

import { toast } from 'react-toastify'
import { Skeleton } from '@mui/material'


interface MovieProps {
  movie: {
    id: string
    backdrop_path: string
    budget: string | number
    genres: {
      id: string
      name: string
    }[]
    overview: string
    production_companies: {
      name: string
    }[]
    poster_path: string
    release_date: string
    revenue: number
    runtime: string | number
    tagline: string
    title: string
    vote_average: string | number
  }
}

interface MovieStorageProps {
  id: string
  poster_path: string
  title: string
}

export default function Movie({ ...props }: MovieProps) {
  const [isLoading, setIsLoading] = useState(true)

  function handleSaveMovie({ id, poster_path, title }: MovieStorageProps) {
    const moviesSaved = localStorage.getItem('@react-movies:movie')
    const moviesList = JSON.parse(moviesSaved || '[]')
    const hasMovieOnList = moviesList.some((movie: MovieStorageProps) => {
      console.log(movie.id, id)
      return movie.id === id
    })

    if (hasMovieOnList) {
      toast.warning('Filme já salvo')
      return
    }

    moviesList.push({
      id,
      poster_path,
      title,
    })

    localStorage.setItem('@react-movies:movie', JSON.stringify(moviesList))
    toast.success('Filme adicionado aos favoritos')
  }

  useEffect(() => {
    props ? setIsLoading(false) : setIsLoading(true)
  }, [props]);

  
  return (
    <div className="min-w-screen min-h-screen bg-black flex flex-col items-center justify-center">
      <div className="max-w-[75rem] h-full flex justify-center">
        {isLoading ? (
          <Skeleton
            width={1200}
            height={674}
            variant="rounded"
            animation="wave"
            sx={{ bgcolor: 'grey.900' }}
          />
        ) : (
          <Image
            src={`https://image.tmdb.org/t/p/original/${props.movie.backdrop_path}`}
            alt={`Banner do filme ${props.movie.title}`}
            width={1200}
            height={674}
            quality={100}
            className="rounded-lg"
          />
        )}
      </div>

      <div className="max-w-full h-full flex justify-center gap-4 mt-8 lg:flex xsm:flex-wrap">
        <aside className="">
          {isLoading ? (
            <Skeleton
              width={360}
              height={540}
              variant="rounded"
              animation="wave"
              sx={{ bgcolor: 'grey.900' }}
            />
          ) : (
            <Image
              src={`https://image.tmdb.org/t/p/w500/${props.movie.poster_path}`}
              alt={`Poster do filme ${props.movie.title}`}
              width={360}
              height={540}
              quality={100}
              priority
              className="rounded-lg"
            />
          )}

          <div className="flex justify-around mt-2">
            <button
              className="w-[11rem] h-12 rounded-lg bg-gray_300 text-danger"
              onClick={() =>
                handleSaveMovie({
                  id: props.movie.id,
                  poster_path: props.movie.poster_path,
                  title: props.movie.title,
                })
              }
            >
              Adicionar aos favoritos
            </button>
            <Link
              href={`https://www.youtube.com/results?search_query=${props.movie.title}+Trailer`}
              className="w-[11rem] h-12 flex items-center justify-center rounded-lg bg-gray_300 text-green"
              target="_blank"
            >
              Assistir trailer
            </Link>
          </div>
        </aside>
        <div className="max-w-full flex flex-col items-center">
          <div className="max-w-[50rem] min-h-[28rem] flex flex-col items-center px-8 inset-0 bg-[#ffffff10] backdrop-blur-md rounded-lg md:w-[55rem] sm:w-[30rem] xsm:w-[25rem]">
            <h1 className=" text-3xl text-white text-center">
              {props.movie.title}
            </h1>
            <h3 className="text-bronze mt-2 text-center">
              {props.movie.tagline ? props.movie.tagline : 'Frase indisponível'}
            </h3> 
            <h4 className="text-bronze mt-2">
              {' ' + props.movie.genres.map((genre) => genre.name)}
            </h4>
            <span className="text-white text-center my-4 overflow-hidden oveflow-hidden overflow-ellipsis">
              {props.movie.overview
                ? props.movie.overview
                : 'Sinopse indísponível'}
            </span>
            <Link
              href={`/cast/${props.movie.id}`}
              className="text-gray_100 text-xl font-bold"
            >
              Ver elenco
            </Link>
          </div>

          <div className="w-[50rem] h-[30rem] flex justify-center mt-4 ">
            <div className="flex gap-2  md:flex xsm:grid grid-cols-2">
              <MovieInfoCard
                logo="calendar"
                title="Data de lançamento"
                value={formatDate(props.movie.release_date)}
              />
              <MovieInfoCard
                logo="clock"
                title="Duração"
                value={props.movie.runtime + ' min'}
              />
              <MovieInfoCard
                logo="dollar"
                title="Orçamento"
                value={formatCurrency(Number(props.movie.budget))}
              />
              <MovieInfoCard
                logo="money"
                title="Receita"
                value={formatCurrency(props.movie.revenue)}
              />
              <MovieInfoCard
                logo="star"
                title="Nota"
                value={props.movie.vote_average}
              />
              <MovieInfoCard
                logo="movie"
                title="movie"
                value={props.movie.production_companies
                  .map((companies) => companies.name)
                  .slice(0, 2)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { id: '955916' } }],
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  const id = params?.id

  try {
    const response = await apiMovies.get(`/movie/${id}`)

    const movie = response.data

    return {
      props: {
        movie,
      },
      revalidate: 60 * 60 * 24 * 7, // 7 days
    }
  } catch (err) {
    return {
      props: {
        movie: [],
      },
    }
  }
}
