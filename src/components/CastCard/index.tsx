import Image from 'next/image'
import { FaUser } from 'react-icons/fa'
import colors from 'tailwindcss/colors'

interface CastCardProps {
  name: string
  character: string
  profile_path: string
}

export function CastCard({ name, character, profile_path }: CastCardProps) {
  return (
    <div className="max-w-[15rem] max-h-[30rem] rounded-lg m-2 flex flex-col items-center hover:scale-x-105 transition-transform cursor-pointer">
      {profile_path === 'user-without-photo' ? (
        <div className="min-w-[15rem] h-[22rem] rounded-lg m-2 flex flex-col items-center justify-center cursor-pointer bg-gray">
          <FaUser size={180} color={colors.white} className="max-w-[15rem] max-h-[22rem]" />
        </div>
      ) : (
        <Image
          src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
          alt={`Imagem do ator ${name}`}
          width={240}
          height={400}
          priority
          className="rounded-lg"
        />
      )}

      <h1 className="text-white font-bold text-center text-ellipsis overflow-hidden whitespace-nowrap">
        {name} ({character})
      </h1>
    </div>
  )
}
