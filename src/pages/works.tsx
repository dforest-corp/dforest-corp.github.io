import type {GetStaticProps, NextPage} from 'next'
import Header from '@/components/Header'
import {EndPoints} from '@/types/cms-types'
import {getWorksPost} from '@/api/getNewsList'
import DOMPurify from 'isomorphic-dompurify'
import Footer from '@/components/Footer'
import WorksInformation from '@/components/Works/worksInformation'
import {NextSeo} from 'next-seo'

type WorksProps = {
  post: EndPoints['get']['news']
}

const Works: NextPage<WorksProps> = ({post}) => {
  return (
    <>
      <NextSeo
        title={'事業案内 | D-FOREST'}
        description={'株式会社ディー・フォレストの事業案内です。'}
      />
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