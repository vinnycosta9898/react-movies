import Image from "next/image"
import Link from "next/link"
import { LogosReact } from "../Icons/React"
import { useSession } from "next-auth/react"

export function Header(){
  const session = useSession()
  const statusAuthenticated = session.status
  const username = session.data?.user.name

  return(
    <div className="w-full h-[6rem] flex items-center justify-around sticky">
      <div className="h-full flex items-center">
        <h1 className="text-2xl text-white font-bold mx-2">React Movies</h1>
        <LogosReact width={40}/>
      </div>
      <nav className="w-80 flex justify-center">
        <Link href='/home' className="text-xl text-white font-bold mx-2 hover:text-teal-400">Inicio</Link>
        <Link href='/home' className="text-xl text-white font-bold mx-2  hover:text-teal-400">Meu Filmes</Link>
      </nav>

      <Link href='/profile' className="flex items-center justify-center">
        <h1 className="text-white text-lg font-bold mx-2">{username}</h1>
        {statusAuthenticated === 'unauthenticated' && <Link href="/" className="text-white text-lg font-bold mx-2">Fazer login</Link>}
        {
          session.status === 'unauthenticated' 
          ?         
          <div className="w-10 h-10 bg-white rounded-[999px]"></div>
          :  
          <Image 
            src={session.data?.user.avatar_url as string}
            alt={session.data?.user.name as string}
            width={80}
            height={80}
            className="w-10 h-10 bg-white rounded-[999px]"
          />
        }
        
      </Link>
    </div>
  )
}