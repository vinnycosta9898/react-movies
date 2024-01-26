import { FavoriteCard } from "@/components/FavoriteCard";
import { Header } from "@/components/Header";

export default function Favorites(){
  return(
    <div className="w-screen h-screen bg-black flex flex-col items-center">
      <Header/>
      <div>
        <FavoriteCard
          poster_path="https://github.com/vinnycosta9898.png"
          title="Velozes e Furiosos"
        />
      </div>
      
    </div>
  )
}