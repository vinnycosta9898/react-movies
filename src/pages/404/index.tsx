import Head from "next/head";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-w-screen min-h-screen bg-black flex flex-col items-center justify-center">
      <Head>
        <title>React Movies | Filme não encontrado</title>
      </Head>
      <h1 className="text-4xl text-white mb-4">404 Página não encontrada</h1>
      <Link href="/home" className="text-blue">
        Voltar para a página de Início
      </Link>
    </div>
  );
}
