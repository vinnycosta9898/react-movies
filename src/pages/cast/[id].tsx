import Head from "next/head";
import { GetStaticPaths, GetStaticProps } from "next";

import { apiMovies } from "@/lib/axios";
import { CastCard } from "@/components/CastCard";

interface CastProps {
  cast: {
    id: string;
    character: string;
    name: string;
    profile_path: string;
  }[];
}

export default function Cast({ cast }: CastProps) {
  return (
    <div className="flex flex-col items-center py-16">
      <Head>
        <title>React Movies | Elenco</title>
      </Head>
      <h1 className="overflow-y-hidden text-center text-4xl font-bold text-white">
        Elenco do filme
      </h1>
      <div className="min-w-screen min-h-screen bg-black">
        <div className="xlg:grid-cols-4 xsm:grid-cols-1 grid h-full w-full grid-cols-5 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          {cast.map((item) => {
            return (
              <div className="m-8" key={item.id}>
                <CastCard
                  name={item.name}
                  character={item.character}
                  profile_path={
                    item.profile_path ? item.profile_path : "user-without-photo"
                  }
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { id: "955916" } }],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  const id = params?.id;

  try {
    const response = await apiMovies.get(`/movie/${id}/credits`);

    const cast = response.data.cast.slice(0, 36);

    return {
      props: {
        cast,
      },
      revalidate: 60 * 60 * 24 * 7, // 7 days
    };
  } catch (err) {
    return {
      props: {
        cast: [],
      },
    };
  }
};
