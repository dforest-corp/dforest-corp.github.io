import type {GetStaticProps, NextPage} from 'next'
import Head from 'next/head'
import Header from '@/components/Header'
import {EndPoints} from '@/types/cms-types'
import {getWorksPost} from '@/api/getNewsList'
import DOMPurify from 'isomorphic-dompurify'
import Footer from '@/components/Footer'
import WorksInformation from '@/components/Works/worksInformation'

type WorksProps = {
  post: EndPoints['get']['news']
}

const Works: NextPage<WorksProps> = ({post}) => {
  return (
    <>
      <Head>
        <title>事業内容 | D-FOREST</title>
      </Head>
      <div className='grid grid-cols-1 gap-20'>
        <Header />
        <WorksInformation post={post} />
        <Footer />
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps<WorksProps> = async () => {
  const post = await getWorksPost()

  return {
    props: {
      post: {
        ...post,
        content: DOMPurify.sanitize(post.content, {
          ADD_ATTR: [
            'target'
          ]
        })
      }
    }
  }
}

export default Works