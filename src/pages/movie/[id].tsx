import Image from "next/image"
import { GetStaticPaths, GetStaticProps } from "next"
import { apiMovies } from "@/lib/axios"
import { Header } from "@/components/Header"
import { MovieInfoCard } from "@/components/MovieInfoCard"

import { formatDate } from "@/utils/formatDate"
import { formatCurrency } from "@/utils/formatCurrency"

interface MovieProps{
  movie:{
    backdrop_path: string
    budget: string | number
    overview: string
    production_companies: string[]
    poster_path: string
    release_date: string
    revenue: number
    runtime: string | number 
    tagline: string
    title: string
    vote_average: string | number
  }
}

export default function Movie({ ...props } : MovieProps){
  const companies = props.movie.production_companies.map(item => item.name)

  const industries = [...companies.slice(0, 2)]
  
  return(
    <div className="min-w-screen min-h-screen bg-black">
      <Header/>
      <div className="w-full h-full flex justify-center gap-4 mt-8">
        <aside>
          <Image
            src={`https://image.tmdb.org/t/p/w500/${props.movie.poster_path}`}
            alt={`poster do filme ${props.movie.title}`}
            width={360}
            height={520}
            className="rounded-lg"
          />
        </aside>
        <div className="w-[40rem] h-[30rem]  flex flex-col items-center">
          <h1 className=" text-3xl text-white text-center">{props.movie.title}</h1>
          <h3 className="text-bronze mt-2">{props.movie.tagline ? props.movie.tagline : 'Frase indisponível'}</h3>
          <span className="text-white text-center my-4">{props.movie.overview ? props.movie.overview : 'Sinopse indísponível'}</span>
          <div className="w-[40rem] h-[20rem] flex justify-center">
            <div className="grid grid-cols-3 gap-12">
              <MovieInfoCard
                logo="calendar"
                title="Data de lançamento"
                value={formatDate(props.movie.release_date)}
              />
              <MovieInfoCard
                logo="clock"
                title="Duração"
                value={props.movie.runtime + " min"}
              />
              <MovieInfoCard
                logo="dollar"
                title="Orçamento"
                value={formatCurrency(Number(props.movie.budget))}
              />
              <MovieInfoCard
                logo="x"
                title="Receita"
                value={formatCurrency(props.movie.revenue)}
              />
              <MovieInfoCard
                logo="x"
                title="Nota"
                value={props.movie.vote_average}
              />
              <MovieInfoCard
                logo="x"
                title="Produção"
                value={industries}
              />
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return{
    paths: [
      { params: {id: '955916'} }
    ],
    fallback :'blocking'
  }
}

export const getStaticProps: GetStaticProps<any, {id: string}> = async ({ params }) => {
  const id = params?.id

  const response = await apiMovies.get(`/movie/${id}`, {
    params:{
      api_key: process.env.API_KEY_TMDB,
      language: 'pt-br',
    }
  })

  const movie = response.data

  return{
    props:{
      movie
    },
    revalidate: 60 * 60 * 24 * 7 // 7 days
  }
}

