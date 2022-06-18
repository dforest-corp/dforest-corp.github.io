import {GetStaticPaths, GetStaticProps, NextPage} from 'next'
import Head from 'next/head'
import DOMPurify from 'isomorphic-dompurify'
import parse from 'html-react-parser';
import {getNewsIdList} from '../../api/getNewsList'
import {EndPoints} from '../../types/cms-types'
import {getNewsDetail} from '../../api/getNewsDetail'

type NewsPageProps = {
  news: EndPoints['get']['news']
}

const NewsPage: NextPage<NewsPageProps> = ({news}) => {
  return (
    <>
      <Head>
        <title>D-FOREST - {news.title}</title>
      </Head>
      <article className='p-4'>
        <h2 className='text-3xl font-bold'>{news.title}</h2>
        <div className='mt-4 prose prose-blue'>{parse(news.content)}</div>
      </article>
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