import type {GetStaticProps, NextPage} from 'next'
import {NextSeo} from 'next-seo'
import {EndPoints} from '@/types/cms-types'
import Header from '../components/common/Header'
import Introduction from '../components/home/Introduction'
import ShopAppInformation from '../components/home/ShopAppInformation'
import Guidance from '../components/home/Guidance'
import ServiceTree from '../components/home/ServiceTree'
import NewsList from '../components/home/NewsList'
import BottomContactGuide from '@/components/home/bottomContactGuide'
import Footer from '../components/common/Footer'
import {getNewsList} from '@/api/getNewsList'

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
