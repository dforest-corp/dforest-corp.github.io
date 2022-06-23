import {GetStaticPaths, GetStaticProps, NextPage} from 'next'
import {NextSeo} from 'next-seo'
import {getNewsIdList} from '@/api/getNewsList'
import {EndPoints} from '@/types/cms-types'
import {getNewsDetail} from '@/api/getNewsDetail'
import Header from '@/components/common/header'
import Footer from '@/components/common/footer'
import NewsView from '@/components/news/newsView'
import {sanitizePost} from '@/utils/sanitizePost'

type NewsPageProps = {
  news: EndPoints['get']['news']
}

const NewsPage: NextPage<NewsPageProps> = ({news}) => {
  return (
    <>
      <NextSeo
        title={`${news.title} | D-FOREST`}
      />
      <div className='grid grid-cols-1 gap-20'>
        <Header />
        <NewsView news={news} />
        <Footer />
      </div>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const news = await getNewsIdList()
  return {
    paths: news.contents.map(item => ({
      params: {
        id: item.id
      }
    })),
    fallback: false
  }
}

export const getStaticProps: GetStaticProps<NewsPageProps, {id: string}> = async ({params}) => {
  if (params === undefined) {
    return {
      notFound: true
    }
  }
  const news = await getNewsDetail(params.id)
  return {
    props: {
      news: sanitizePost(news)
    }
  }
}

export default NewsPage