import { apiMovies } from '@/lib/axios'
import { GetStaticPaths, GetStaticProps } from 'next'
import { CastCard } from '@/components/CastCard'

interface CastProps {
  cast: {
    id: string
    character: string
    name: string
    profile_path: string
  }[]
}

export default function Cast({ cast }: CastProps) {
  return (
    <div className="flex flex-col items-center py-16">
      <h1 className="text-4xl text-white font-bold text-center overflow-y-hidden">Elenco do filme</h1>
      <div className="min-w-screen min-h-screen bg-black">
        <div className="w-full h-full grid grid-cols-5 gap-4 xlg:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 xsm:grid-cols-1">
          {cast.map((item) => {
            return (
              <div className="m-8">
                <CastCard
                  key={item.id}
                  name={item.name}
                  character={item.character}
                  profile_path={
                    item.profile_path ? item.profile_path : 'user-without-photo'
                  }
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
  return {
    paths: [{ params: { id: '955916' } }],
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  const id = params?.id

  try {
    const response = await apiMovies.get(`/movie/${id}/credits`)

    const cast = response.data.cast.slice(0, 36)

    return {
      props: {
        cast,
      },
      revalidate: 60 * 60 * 24 * 7, // 7 days
    }
  } catch (err) {
    return {
      props: {
        cast: [],
      },
    }
  }
}
