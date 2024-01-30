import Link from "next/link";
import { useEffect, useState } from "react";

import { FavoriteCard } from "@/components/FavoriteCard";
import { toast } from "sonner";

interface FavoriteCardProps{
  id: string 
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

  function handleRemoveMovieOnFavoriteList(movieId: string){
    const movieRemoved = moviesSaved.filter((movie) => {
      return movie.id !== movieId
    })

    setMoviesSaved(movieRemoved)
    localStorage.setItem('@react-movies:movie', JSON.stringify(movieRemoved))
    toast.success("Filme removido com sucesso")

  }

  useEffect(() => {
    getMoviesSavedOnStorage()
  }, [])

  return(
    <div className="min-w-full min-h-screen bg-black flex flex-col items-center">
      <div>
        {moviesSaved.length !== 0 ? moviesSaved.map((movie) => {
          return(
            <div className="flex flex-col items-center justify-center">
              <FavoriteCard
                id={movie.id}
                poster_path={movie.poster_path}
                title={movie.title}
                onRemovedMovie={handleRemoveMovieOnFavoriteList}
              />
            </div>
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