import {EndPoints} from '@/types/cmsType'
import HtmlView from '@/components/common/htmlView'
import ReaderLayout from '@/components/common/readerLayout'
import SectionTitle from '@/components/common/sectionTitle'

export type CompanyInformationProps = {
  post: EndPoints['get']['news']
}

const CompanyInformation = ({post}: CompanyInformationProps) => {
  return (
    <ReaderLayout>
      <SectionTitle>{post.title}</SectionTitle>
      <div className='mt-10 prose prose-blue max-w-none'>
        <HtmlView html={post.content} />
      </div>
    </ReaderLayout>
  )
}

export default CompanyInformation