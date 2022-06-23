import type {NextPage} from 'next'
import Header from '@/components/common/header'
import Footer from '@/components/common/footer'
import ContactTel from '@/components/contact/contactTel'
import ContactForm from '@/components/contact/contactForm'
import {NextSeo} from 'next-seo'

const Contacts: NextPage = () => {
  return (
    <>
      <NextSeo
        title={'お問い合わせ | D-FOREST'}
        description={'株式会社ディー・フォレストのお問い合わせページです。'}
      />
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