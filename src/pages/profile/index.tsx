import Image from "next/image";
import { Header } from "@/components/Header";
import { useSession } from "next-auth/react";

export default function Profile(){
  const session = useSession()

  console.log(session.data?.user.name)
  return(
    <div className="w-screen h-screen bg-black">
      <Header/>
      <div>
        <div className="flex flex-col items-center mt-16">
          <div className="w-32 h-32 bg-white rounded-[999px]"></div>
          <h1 className="text-white text-2xl font-bold mt-4">{session.data?.user.name}</h1>
          <div>
            <h1>Meus Filmes</h1>
            <div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}