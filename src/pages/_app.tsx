import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'

import '@/styles/globals.css'
import 'tailwindcss/tailwind.css'
import { Toaster } from 'sonner'
import { Header } from '@/components/Header'
import { useRouter } from 'next/router'

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  const router = useRouter()
  const isLoginPage = router.pathname === '/'
  console.log(isLoginPage)
  return (
    <SessionProvider session={session}>
      <Toaster richColors />
      {!isLoginPage && <Header/>}
      <Component {...pageProps} />
    </SessionProvider>
  )
}
