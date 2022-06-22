import type {GetStaticProps, NextPage} from 'next'
import Header from '../components/Header'
import Head from 'next/head'
import {getCompanyPost} from '@/api/getNewsList'
import {EndPoints} from '@/types/cms-types'
import DOMPurify from 'isomorphic-dompurify'
import CompanyInformation from '@/components/Company/companyInformation'
import Footer from '@/components/Footer'

type CompanyProps = {
  post: EndPoints['get']['news']
}

const Company: NextPage<CompanyProps> = ({post}) => {
  return (
    <>
      <Head>
        <title>会社案内 | D-FOREST</title>
      </Head>
      <Header />
      <CompanyInformation post={post} />
      <Footer />
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