import type {GetStaticProps, NextPage} from 'next'
import {EndPoints} from '@/types/cms-types'
import {getNewsList} from '@/api/getNewsList'
import Introduction from '../components/Home/Introduction'
import ShopAppInformation from '../components/Home/ShopAppInformation'
import Guidance from '../components/Home/Guidance'
import ServiceTree from '../components/Home/ServiceTree'
import Header from '../components/Header'
import Footer from '../components/Footer'
import NewsList from '../components/Home/NewsList'
import BottomContactGuide from '@/components/Home/bottomContactGuide'
import {NextSeo} from 'next-seo'

type HomeProps = {
  news: EndPoints['gets']['news']
}

const Home: NextPage<HomeProps> = ({news}) => {
  return (
    <>
      <NextSeo
        title={'D-FOREST | Creative Web and Smart phone application'}
        description={'スマホアプリ・ホームページを制作します。スマートフォンへの対応もおまかせください。'}
      />
      <Header />
      <Introduction />
      <ShopAppInformation />
      <Guidance />
      <ServiceTree />
      <NewsList items={news.contents} />
      <BottomContactGuide />
      <Footer />
    </>
  )
}

export const getStaticProps: GetStaticProps<HomeProps> = async (context) => {
  const data = await getNewsList()
  return {
    props: {
      news: data
    }
  }
}

export default Home
