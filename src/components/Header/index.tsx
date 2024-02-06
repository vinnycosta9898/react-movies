import colors from "tailwindcss/colors";
import Link from "next/link";
import { FaReact } from "react-icons/fa"

export function Header() {
  return (
    <div className="min-w-screen h-[6rem] flex items-center justify-around sticky px-8">
      <div className="h-full flex items-center">
        <h1 className="text-2xl text-white font-bold mx-2 md:text-xl sm:text-lg xsm:text-[0.75rem]">
          React Movies
        </h1>
        <FaReact size={40} color={colors.blue["500"]} className="md:w-[30px]" />
      </div>
      <nav className="w-80 flex justify-center">
        <Link
          href="/home"
          className="text-xl text-white font-bold mx-2 hover:text-teal-400 md:text-xl sm:text-lg xsm:text-[0.75rem]"
        >
          Inicio
        </Link>
        <Link
          href="/favorites"
          className="text-xl text-white font-bold mx-2 hover:text-teal-400 md:text-xl sm:text-lg xsm:text-[0.75rem]"
        >
          Meu Filmes
        </Link>
      </nav>
    </div>
  );
}
