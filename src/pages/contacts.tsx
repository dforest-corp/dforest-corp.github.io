import type {NextPage} from 'next'
import Head from 'next/head'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const Contacts: NextPage = () => {
  return (
    <>
      <Head>
        <title>お問い合わせ | D-FOREST</title>
      </Head>
      <Header />
      <Footer />
    </>
  )
}

export default Contacts