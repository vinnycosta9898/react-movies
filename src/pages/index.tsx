import Image from "next/image";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";

import colors from "tailwindcss/colors";
import { FcGoogle } from "react-icons/fc";
import { FaReact, FaUser } from "react-icons/fa";
import movieImg from "../../public/movies.jpeg";

import { SlideText } from "@/components/SlideText";
import Head from "next/head";

export default function Home() {
  const router = useRouter();

  async function handleSignIn(provider: string, callbackUrl = "/google") {
    if (!provider) {
      await router.push("/");
      return;
    }

    signIn(provider, {
      callbackUrl,
    });

    await router.push("/home");
  }

  return (
    <div className="min-w-screen flex min-h-screen flex-col items-center justify-center">
      <Head>
        <title>React Movies | Login</title>
      </Head>
      <div className="h-screen w-screen">
        <Image
          src={movieImg}
          alt="Image de filmes"
          quality={100}
          priority
          className="h-full w-full"
        />
      </div>
      <div className="z-1 xsm:w-[24rem] xsm:h-[24rem] absolute flex h-[30rem] w-[30rem] flex-col items-center rounded-s-lg backdrop-blur-md md:h-[30rem] md:w-[30rem]">
        <div className="mt-4 flex h-20 items-center justify-center gap-4">
          <h1 className="xsm:text-2xl overflow-hidden text-4xl font-bold text-white md:text-4xl">
            React Movies
          </h1>
          <FaReact
            size={60}
            color={colors.blue["500"]}
            className="xsm:w-[30px] md:w-[60px]"
          />
        </div>
        <div className="mt-4 flex flex-col gap-4">
          <button
            className="bg-gray_300 flex h-16 min-w-80 items-center justify-center gap-4 rounded-lg"
            onClick={() => handleSignIn("google")}
          >
            <FcGoogle size={40} className="xsm:w-[20px]" />
            <h1 className="xsm:text-sm text-xl font-bold text-white md:text-xl">
              Entrar com Google
            </h1>
          </button>

          <button
            className="bg-gray_300 flex h-16 min-w-80 items-center justify-center gap-4 rounded-lg"
            onClick={() => router.push("/home")}
          >
            <FaUser size={30} color={colors.white} className="xsm:w-[20px]" />
            <h1 className="xsm:text-sm text-xl font-bold text-white md:text-xl">
              Entrar como visitante
            </h1>
          </button>
        </div>

        <SlideText
          primary_text="Fique por dentro do seus filmes favoritos"
          secondary_text="Leia a sinopse e veja o elenco"
        />
      </div>
    </div>
  );
}
