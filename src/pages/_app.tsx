import '../styles/globals.scss'
import 'react-toastify/dist/ReactToastify.css'
import type {AppProps} from 'next/app'
import {ToastContainer} from 'react-toastify'
import AppDefaultSeo from '@/components/common/appDefaultSeo'

function MyApp({Component, pageProps}: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <AppDefaultSeo />
      <ToastContainer />
    </>
  )
}

export default MyApp
