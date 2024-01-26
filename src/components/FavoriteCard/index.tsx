import Image from "next/image"
import { FaTrashAlt } from "react-icons/fa";
import colors from "tailwindcss/colors";


interface FavoriteCardProps{
  poster_path: string
  title: string
}

export function FavoriteCard({ poster_path, title } : FavoriteCardProps){
  return(
    <div className="max-w-[30rem] max-h-36 bg-gray_300 rounded-lg flex items-center justify-between gap-8">
      <Image
        src={poster_path}
        alt={`Imagem do file ${title}`}
        width={80}
        height={120}
        quality={100}
        priority
        className="rounded-lg"
      />
      <h1 className="text-white text-xl font-bold">{title}</h1>
      <button className="mx-2">
        <FaTrashAlt size={20} color={colors.red['400']}/>
      </button>
    </div>
  )
}