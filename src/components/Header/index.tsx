import colors from 'tailwindcss/colors'
import Image from 'next/image'
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { FaReact } from 'react-icons/fa'

export function Header() {
  const session = useSession()
  const statusAuthenticated = session.status
  const username = session.data?.user.name

  return (
    <div className="w-full h-[6rem] bg-black flex items-center justify-around sticky">
      <div className="h-full flex items-center">
        <h1 className="text-2xl text-white font-bold mx-2 md:text-xl sm:text-lg xsm:text-sm">
          React Movies
        </h1>
        <FaReact
          size={40}
          color={colors.blue['500']}
          className="md:w-[30px] sm:w-[20px] xsm:w-[20px]"
        />
      </div>
      <nav className="w-80 flex justify-center">
        <Link
          href="/home"
          className="text-xl text-white font-bold mx-2 hover:text-teal-400 md:text-xl sm:text-lg xsm:text-sm"
        >
          Inicio
        </Link>
        <Link
          href="/favorites"
          className="text-xl text-white font-bold mx-2 hover:text-teal-400 md:text-xl sm:text-lg xsm:text-sm"
        >
          Meu Filmes
        </Link>
      </nav>

      <Link href="/profile" className="flex items-center justify-center">
        <h1 className="text-white text-lg font-bold mx-2">{username}</h1>
        {statusAuthenticated === 'unauthenticated' && (
          <Link href="/" className="text-white text-lg font-bold mx-2">
            Fazer login
          </Link>
        )}
        {session.status === 'unauthenticated' ? (
          <div className="w-10 h-10 bg-white rounded-[999px] md:text-xl sm:text-lg xsm:text-sm"></div>
        ) : (
          <Image
            src={session.data?.user.avatar_url as string}
            alt={session.data?.user.name as string}
            width={80}
            height={80}
            className="w-10 h-10 bg-white rounded-[999px]"
          />
        )}
      </Link>
    </div>
  )
}
