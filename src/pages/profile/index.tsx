import Image from 'next/image'
import { useSession, signOut } from 'next-auth/react'
import { useRouter } from 'next/router'

export default function Profile() {
  const session = useSession()
  const router = useRouter()

  async function handleSignOut() {
    await router.push('/')
    await signOut()
  }

  return (
    <div className="min-w-screen min-h-screen bg-black">
      <div>
        <div className="flex flex-col items-center">
          <Image
            src={session.data?.user.avatar_url as string}
            alt={session.data?.user.name as string}
            width={180}
            height={180}
            className="w-32 h-32 bg-white rounded-[999px]"
          />

          <h1 className="text-white text-2xl font-bold mt-4">
            {session.data?.user.name}
          </h1>
          <div>
            <div className="mt-4">
              <button
                className="w-40 h-12 bg-gray_300 text-danger rounded-lg"
                onClick={() => handleSignOut()}
              >
                Fazer logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
