import type {GetStaticProps, NextPage} from 'next'
import {NextSeo} from 'next-seo'
import {EndPoints} from '@/types/cms-types'
import Header from '@/components/common/header'
import CompanyInformation from '@/components/company/companyInformation'
import CompanyMap from '@/components/company/companyMap'
import Footer from '@/components/common/footer'
import {getCompanyPost} from '@/api/getNewsDetail'
import {sanitizePost} from '@/utils/sanitizePost'

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
      post: sanitizePost(post)
    }
  }
}

export default Company