import type { AppProps } from "next/app";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "@/styles/globals.css";
import "tailwindcss/tailwind.css";
import { Header } from "@/components/Header";
import { useRouter } from "next/router";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  const router = useRouter();
  const isLoginPage = router.pathname === "/";

  return (
      <>
        {!isLoginPage && <Header />}
        <ToastContainer />
        <Component {...pageProps} />
      </>
  
  );
}
