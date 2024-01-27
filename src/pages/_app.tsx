import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";

import "@/styles/globals.css";
import 'tailwindcss/tailwind.css'
import { Toaster, toast } from 'sonner'
import { Header } from "@/components/Header";


export default function App({ 
    Component,
     pageProps : {session, ...pageProps}
    }: AppProps) {
  return (
      <SessionProvider session={session}>
          <Toaster richColors />
          <Header/>
          <Component {...pageProps} />
      </SessionProvider>
)}
