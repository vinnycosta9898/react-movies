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

  async function handleSignIn(provider: string, callbackUrl = "/") {
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
    <div className="min-w-screen min-h-screen flex flex-col items-center justify-center">
      <Head>
        <title>React Movies | Login</title>
      </Head>
      <div className="w-screen h-screen">
        <Image
          src={movieImg}
          alt="Image de filmes"
          quality={100}
          priority
          className="w-full h-full"
        />
      </div>
      <div className="w-[30rem] h-[30rem] backdrop-blur-md absolute z-1 flex flex-col items-center md:w-[30rem] md:h-[30rem] xsm:w-[24rem] xsm:h-[24rem] rounded-s-lg">
        <div className="h-20 flex justify-center items-center gap-4 mt-4">
          <h1 className="text-white text-4xl font-bold overflow-hidden md:text-4xl xsm:text-2xl">
            React Movies
          </h1>
          <FaReact
            size={60}
            color={colors.blue["500"]}
            className="md:w-[60px] xsm:w-[30px]"
          />
        </div>
        <div className="flex flex-col gap-4 mt-4">
          <button
            className="min-w-80 h-16 bg-gray_300 rounded-lg flex justify-center items-center gap-4"
            onClick={() => handleSignIn("google")}
          >
            <FcGoogle size={40} className="xsm:w-[20px]" />
            <h1 className="text-white text-xl font-bold md:text-xl xsm:text-sm">
              Entrar com Google
            </h1>
          </button>

          <button
            className="min-w-80 h-16 bg-gray_300 rounded-lg flex justify-center items-center gap-4"
            onClick={() => router.push("/home")}
          >
            <FaUser size={30} color={colors.white} className="xsm:w-[20px]" />
            <h1 className="text-white text-xl font-bold md:text-xl xsm:text-sm">
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
