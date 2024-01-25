import { Header } from "@/components/Header";
import { apiMovies } from "@/lib/axios";
import { GetStaticPaths, GetStaticProps } from "next";
import { CastCard } from "@/components/CastCard";

interface CastProps{
  cast:{
    id: string
    character: string
    name: string
    profile_path: string
  }[]
}

export default function Cast({ cast } : CastProps){
  console.log(cast)
  return(
    <div className="min-w-screen min-h-screen bg-black">
      <Header/>
      <div className="flex flex-col items-center mt-16">
        <h1 className="text-4xl text-white font-bold">Elenco do filme</h1>
        <div className="grid grid-cols-3">
        {cast.map((item) => {
          return(
            <div className=" m-8">
              <CastCard
                key={item.id}
                name={item.name}
                character={item.character}
                profile_path={item.profile_path}
              />
            </div>
          )
        })}
        </div>
      </div>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return{
    paths: [
      { params: {id: '955916'} }
    ],
    fallback :'blocking'
  }
}

export const getStaticProps: GetStaticProps<any, {id: string}> = async ({ params }) => {
  const id = params?.id

  try{
    const response = await apiMovies.get(`/movie/${id}/credits`, {
      params:{
        api_key: process.env.API_KEY_TMDB,
        language: 'pt-br',
      }
    })
  
    const cast = response.data.cast.slice(0, 36)
  
    return{
      props:{
        cast
      },
      revalidate: 60 * 60 * 24 * 7 // 7 days
    }
  }catch(err){
    return{
      props:{
        cast: []
      }
    }
  }

  
}


