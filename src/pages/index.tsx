import colors from 'tailwindcss/colors'
import { FcGoogle } from 'react-icons/fc'
import { useRouter } from 'next/router'
import { signIn, useSession } from 'next-auth/react'
import { FaReact } from 'react-icons/fa'

export default function Home() {
  const router = useRouter()
  const session = useSession()

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
      <aside className="w-[50%] h-full bg-gray_500"></aside>
      <div className="w-[50%] h-full text-2 text-white flex flex-col items-center">
        <div className="w-62 h-44 flex items-center justify-around mt-12">
          <h1 className="text-2xl mx-4">React Movies</h1>
          <FaReact size={60} color={colors.blue['500']} />
        </div>

        <button
          className="w-64 h-12 text-xl bg-gray_300 flex justify-around items-center rounded-lg"
          onClick={() => handleSignIn('google')}
        >
          <FcGoogle size={30} />
          Entrar com Google
        </button>
      </div>
    </div>
  )
}
