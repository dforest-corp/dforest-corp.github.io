import type {GetStaticProps, NextPage} from 'next'
import Header from '../components/Header'
import {getCompanyPost} from '@/api/getNewsList'
import {EndPoints} from '@/types/cms-types'
import DOMPurify from 'isomorphic-dompurify'
import CompanyInformation from '@/components/Company/companyInformation'
import Footer from '@/components/Footer'
import CompanyMap from '@/components/Company/companyMap'
import {NextSeo} from 'next-seo'

type CompanyProps = {
  post: EndPoints['get']['news']
}

const Company: NextPage<CompanyProps> = ({post}) => {
  return (
    <>
      <NextSeo
        title={'会社案内 | D-FOREST'}
        description={'株式会社ディー・フォレストの会社案内です。'}
      />
      <div className='grid grid-cols-1 gap-20'>
        <Header />
        <CompanyInformation post={post} />
        <CompanyMap />
        <Footer />
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps<CompanyProps> = async () => {
  const post = await getCompanyPost()

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

export default Company