import Image from 'next/image'
import colors from 'tailwindcss/colors'
import { FcGoogle } from 'react-icons/fc'
import { useRouter } from 'next/router'
import { signIn  } from 'next-auth/react'
import { FaReact, FaUser } from 'react-icons/fa'
import { SlideText } from '@/components/SlideText'
import movieImg from '../../public/movies.jpeg'

export default function Home() {
  const router = useRouter()

  async function handleSignIn(provider: string, callbackUrl = '/') {
    if (!provider) {
      await router.push('/')
      return
    }

    signIn(provider, {
      callbackUrl,
    })

    await router.push('/home')
  }

  return (
    <div className="min-w-screen h-screen flex">
      <aside className="w-[50%] h-full bg-gray_500 flex items-center justify-center">
        <Image
          src={movieImg}
          alt="Image de filmes"
          className="w-full h-full"
        />
        <SlideText
          primary_text='Acompanhe os seus filmes favoritos de onde quiser'
          secondary_text='Leia a sinopse e veja o elenco do filme.'
        />
      </aside>
      <div className="w-[50%] h-full text-2 text-white flex flex-col items-center ">
        <div className="w-62 h-44 flex items-center justify-around mt-12">
          <h1 className="text-2xl mx-4">React Movies</h1>
          <FaReact size={60} color={colors.blue['500']} />
        </div>

        <div className="flex flex-col gap-4">
          <button
            className="w-64 h-16 text-xl bg-gray_300 flex justify-around items-center rounded-lg"
            onClick={() => handleSignIn('google')}
          >
            <FcGoogle size={30} />
            Entrar com Google
          </button>

          <button
            className="w-64 h-16 text-xl bg-gray_300 flex justify-around items-center rounded-lg"
            onClick={() => router.push('/home')}
          >
            <FaUser size={30} />
            Entrar como Visitante
          </button>
        </div>
      </div>
    </div>
  )
}
