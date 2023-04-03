import '@/styles/home.css'
import '@/styles/globals.css'

import type { AppProps } from 'next/app'
import Navbar from '@/components/Navbar'
import Head from 'next/head'
export default function App({ Component, pageProps }: AppProps) {
  return <>
  <Head>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
<meta name="google-site-verification" content="BtqUqNIwx2IH-1jz2bNNBEC26oUYy22GsSfNdqWfLj0" />
  </Head>
  <Navbar/>
  <Component {...pageProps} />
  </>
}
