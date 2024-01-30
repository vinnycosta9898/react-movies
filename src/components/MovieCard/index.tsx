import Image from "next/image"

interface MovieCardProps{
  id: string
  poster_path: string
  title: string
}

export function MovieCard({ poster_path, title } : MovieCardProps){

  return(
    <div className="w-[20rem] h-[30rem] rounded-lg bg-red-200 m-2 hover:scale-105 transition-transform cursor-pointer">
      <Image 
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`} 
        alt={`Imagem do filme ${title}`}
        width={320}
        height={480}
        priority
      />
    </div>
  )
}