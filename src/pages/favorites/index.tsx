import Link from "next/link";
import { useEffect, useState } from "react";

import { FavoriteCard } from "@/components/FavoriteCard";
import { Header } from "@/components/Header";

interface FavoriteCardProps{
  movieId: string 
  poster_path: string
  title: string
}[]

export default function Favorites(){
  const [moviesSaved, setMoviesSaved] = useState<FavoriteCardProps[]>([])
  function getMoviesSavedOnStorage(){
    const listMovies = localStorage.getItem('@react-movies:movie')
    const moviesList = JSON.parse(listMovies || '[]')
    setMoviesSaved(moviesList)
  }

  useEffect(() => {
    getMoviesSavedOnStorage()
  }, [])

  return(
    <div className="min-w-screen min-h-screen bg-black flex flex-col items-center">
      <Header/>
      <div>
        {moviesSaved.length !== 0 ? moviesSaved.map((movie) => {
          return(
            <FavoriteCard
              poster_path={movie.poster_path}
              title={movie.title}
            />
          )
        }) 
        : 
        <div className="flex flex-col items-center justify-center mt-16">
          <h1 className="text-4xl text-white text-center font-bold my-4">Lista Vazia...</h1>
          <Link href='/home' className="text-blue text-xl">Clique aqui para para adicionar filmes a lista</Link>
        </div>
      }
      </div>
      
    </div>
  )
}