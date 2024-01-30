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
    <div className="w-[15rem] h-[25rem] rounded-lg bg-red-200 m-2 flex flex-col items-center hover:scale-105 transition-transform cursor-pointer">
      {profile_path === 'user-without-photo' ? (
        <div className="w-[15rem] h-[22.5rem] bg-gray rounded-lg flex items-center justify-center">
          <FaUser size={180} color={colors.white} />
        </div>
      ) : (
        <Image
          src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
          alt={`Imagem do ator ${name}`}
          width={320}
          height={480}
          priority
          className="rounded-lg"
        />
      )}

      <h1 className="text-white font-bold text-center">
        {name} ({character})
      </h1>
    </div>
  )
}
