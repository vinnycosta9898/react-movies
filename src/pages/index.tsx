import { LogosGoogleIcon } from "@/components/Icons/Google";
import { LogosReact } from "@/components/Icons/React";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";

export default function Home() {
  const router = useRouter()

  async function handleSignIn(provider: string, callbackUrl="/"){
    if(!provider){
      await router.push('/')
      return
    }
    signIn(provider, {
      callbackUrl
    })

    await router.push('/home')
  }
  
  return (
    <div className="w-screen h-screen bg-black flex">
      <aside className="w-[50%] h-full bg-gray_500">
  
      </aside>

      <div className="flex-1 h-full text-2xl text-white flex flex-col items-center">
        <div className="w-62 h-44 flex items-center justify-around mt-12">
          <h1 className="text-2xl mx-4">React Movies</h1>
          <LogosReact width={60}/>
        </div>

        <button className="w-64 h-12 text-xl bg-gray_300 flex justify-around items-center rounded-lg" onClick={() => handleSignIn("google")}>
          <LogosGoogleIcon/>
          Entrar com Google
        </button>
        
      </div>
    </div>
  );
}
