import { LogosGoogleIcon } from "@/components/Icons/Google";
import { LogosReact } from "@/components/Icons/React";

export default function Home() {
  return (
    <div className="w-screen h-screen bg-black flex">
      <aside className="w-[50%] h-full">
  
      </aside>

      <div className="flex-1 h-full text-2xl text-white flex flex-col items-center">
        <div className="w-62 h-44 flex items-center justify-around mt-12">
          <h1 className="text-2xl mx-4">React Movies</h1>
          <LogosReact width={60}/>
        </div>

        <button className="w-64 h-12 bg-gray-800 flex justify-around items-center rounded-lg">
          <LogosGoogleIcon/>
          Entrar com Google
        </button>
        
      </div>
    </div>
  );
}
