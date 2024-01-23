import Link from "next/link"
import { LogosReact } from "../Icons/React"

export function Header(){
  return(
    <div className="w-full h-[6rem] flex items-center justify-around sticky">
      <div className="h-full flex items-center">
        <h1 className="text-2xl text-white font-bold mx-2">React Movies</h1>
        <LogosReact width={40}/>
      </div>
      <nav className="w-80 flex">
        <Link href='/home' className="text-xl text-white font-bold mx-2 hover:text-teal-400">Inicio</Link>
        <Link href='/home' className="text-xl text-white font-bold mx-2  hover:text-teal-400">Meu Perfil</Link>
      </nav>
    </div>
  )
}