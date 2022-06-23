import '../styles/globals.scss'
import 'react-toastify/dist/ReactToastify.css'
import type {AppProps} from 'next/app'
import {ToastContainer} from 'react-toastify'
import {DefaultSeo} from 'next-seo'
import SEO from '../next-seo.config'

function MyApp({Component, pageProps}: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <DefaultSeo {...SEO} />
      <ToastContainer />
    </>
  )
}

export default MyApp
