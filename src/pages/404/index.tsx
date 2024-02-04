import Head from "next/head";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-w-screen flex min-h-screen flex-col items-center justify-center bg-black">
      <Head>
        <title>React Movies | Filme não encontrado</title>
      </Head>
      <h1 className="mb-4 text-4xl text-white">404 Página não encontrada</h1>
      <Link href="/home" className="text-blue">
        Voltar para a página de Início
      </Link>
    </div>
  );
}
