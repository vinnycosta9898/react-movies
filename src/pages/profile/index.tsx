import Image from 'next/image'
import { Header } from "@/components/Header";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/router";

export default function Profile(){
  const session = useSession()
  const router = useRouter()

  async function handleSignOut(){
    await router.push('/')
    await signOut()
  }
  
  console.log(session.data?.user.avatar_url)
  return(
    <div className="w-screen h-screen bg-black">
      <Header/>
      <div>
        <div className="flex flex-col items-center mt-16">
          <Image
            src={session.data?.user.avatar_url as string}
            alt={session.data?.user.name as string}
            width={180}
            height={180}
            className="w-32 h-32 bg-white rounded-[999px]"
          />
          
          <h1 className="text-white text-2xl font-bold mt-4">{session.data?.user.name}</h1>
          <div>
            <div className="mt-4">
              <button className="w-40 h-12 bg-gray_300 text-danger rounded-lg" onClick={() => handleSignOut()}>Fazer logout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}