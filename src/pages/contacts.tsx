import type {NextPage} from 'next'
import Head from 'next/head'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ContactTel from '@/components/Contact/contactTel'
import ContactForm from '@/components/Contact/contactForm'

const Contacts: NextPage = () => {
  return (
    <>
      <Head>
        <title>お問い合わせ | D-FOREST</title>
      </Head>
      <div className='grid grid-cols-1 gap-20'>
        <Header />
        <ContactTel />
        <ContactForm />
        <Footer />
      </div>
    </>
  )
}

export default Contacts