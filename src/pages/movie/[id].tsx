import Image from "next/image"
import { GetStaticPaths, GetStaticProps } from "next"
import { apiMovies } from "@/lib/axios"
import { Header } from "@/components/Header"
import { MovieInfoCard } from "@/components/MovieInfoCard"

import { formatDate } from "@/utils/formatDate"
import { formatCurrency } from "@/utils/formatCurrency"
import Link from "next/link"

interface MovieProps{
  movie:{
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

export default function Movie({ ...props } : MovieProps){
  
  function handleSaveMovie(movieId: string){
    const moviesSaved = localStorage.getItem('@react-movies:movie')
    const moviesList = JSON.parse(moviesSaved || '[]')
    const hasMovieOnList = moviesList.some((movie: MovieProps) => {
      return movie.movie?.id === movieId
    })

    if(hasMovieOnList){
      alert("Filme já salvo")
      return;
    }

    moviesList.push(movieId)
    localStorage.setItem('@react-movies:movie', JSON.stringify(moviesList))
    alert("Filme adicionado aos favoritos")
  }

  return(
    <div className="min-w-screen min-h-screen bg-black flex flex-col items-center">
      <Header/>
      <Image
            src={`https://image.tmdb.org/t/p/w500/${props.movie.backdrop_path}`}
            alt={`Banner do filme ${props.movie.title}`}
            width={1200}
            height={674}
            quality={100}
            className="rounded-lg"
          />
      <div className="w-full h-full flex justify-center gap-4 mt-8">
        <aside>
          <Image
            src={`https://image.tmdb.org/t/p/w500/${props.movie.poster_path}`}
            alt={`Poster do filme ${props.movie.title}`}
            width={360}
            height={420}
            quality={100}
            priority
            className="rounded-lg"
          />
          <div className="flex justify-around mt-2">
            <button 
              className="w-[11rem] h-12 rounded-lg bg-gray_300 text-danger"
              onClick={() => handleSaveMovie(props.movie.id)}
            >
              Adicionar aos favoritos
            </button>
            <Link 
              href={`https://www.youtube.com/results?search_query=${props.movie.title}+Trailer`}
              className="w-[11rem] h-12 flex items-center justify-center rounded-lg bg-gray_300 text-green"
            >
              Assistir trailer
            </Link>
          </div>
        </aside>
        <div className="flex flex-col items-center">
        <div className="w-[50rem] h-[20rem] flex flex-col justify-center items-center px-8 inset-0 bg-[#ffffff10] backdrop-blur-md rounded-lg">
          <h1 className=" text-3xl text-white text-center">{props.movie.title}</h1>
          <h3 className="text-bronze mt-2 text-center">{props.movie.tagline ? props.movie.tagline : 'Frase indisponível'}</h3>
          <h4 className="text-bronze mt-2">{" " + props.movie.genres.map(genre => genre.name)}</h4>
          <span className="text-white text-center my-4">{props.movie.overview ? props.movie.overview : 'Sinopse indísponível'}</span>
          <Link href={`/cast/${props.movie.id}`} className="text-gray_100 text-xl font-bold">Ver elenco</Link>
        </div>

        <div className="w-[50rem] h-[20rem] flex justify-center mt-4">
          <div className="flex gap-2">
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
              value={props.movie.production_companies.map(companies => companies.name).slice(0, 2)}
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

