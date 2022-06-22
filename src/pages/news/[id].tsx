import {GetStaticPaths, GetStaticProps, NextPage} from 'next'
import Head from 'next/head'
import DOMPurify from 'isomorphic-dompurify'
import {getNewsIdList} from '@/api/getNewsList'
import {EndPoints} from '@/types/cms-types'
import {getNewsDetail} from '@/api/getNewsDetail'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import NewsView from '@/components/News/newsView'

type NewsPageProps = {
  news: EndPoints['get']['news']
}

const NewsPage: NextPage<NewsPageProps> = ({news}) => {
  return (
    <>
      <Head>
        <title>{news.title} | D-FOREST</title>
      </Head>
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
      news: {
        ...news,
        content: DOMPurify.sanitize(news.content, {
          ADD_ATTR: [
            'target'
          ]
        })
      }
    }
  }
}

export default NewsPage