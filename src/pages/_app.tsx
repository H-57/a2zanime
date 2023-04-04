import '@/styles/globals.css'
import '@/styles/home.css'

import type { AppProps } from 'next/app'
import Navbar from '@/components/Navbar'
import Head from 'next/head'
export default function App({ Component, pageProps }: AppProps) {
  return <>
  <Head>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
  <meta name="google-site-verification" content="AbBSUdH4hKhXW68-cnEnKLVss2r-tJ8kP0g6asVMu3U" />
  </Head>
  <Navbar/>
  <Component {...pageProps} />
  </>
}
