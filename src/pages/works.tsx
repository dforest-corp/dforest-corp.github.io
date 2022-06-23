import type {GetStaticProps, NextPage} from 'next'
import {NextSeo} from 'next-seo'
import {EndPoints} from '@/types/cms-types'
import Header from '@/components/common/Header'
import WorksInformation from '@/components/works/worksInformation'
import Footer from '@/components/common/Footer'
import {getWorksPost} from '@/api/getNewsDetail'
import {sanitizePost} from '@/utils/sanitizePost'

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
      post: sanitizePost(post)
    }
  }
}

export default Works