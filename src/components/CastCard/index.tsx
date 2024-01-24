import Image from "next/image"

interface CastCardProps{
  name: string
  character: string
  profile_path: string
}

export function CastCard({name, character, profile_path } : CastCardProps){
  return(
    <div className="w-[15rem] h-[25rem] rounded-lg bg-red-200 m-2 flex flex-col items-center hover:scale-105 transition-transform cursor-pointer">
      <Image 
        src={`https://image.tmdb.org/t/p/w500/${profile_path}`} 
        alt={`Imagem do ator ${name}`}
        width={320}
        height={480}
        priority
      />
      <h1 className="text-white font-bold text-center">{name} ({character})</h1>
    </div>
  )
}