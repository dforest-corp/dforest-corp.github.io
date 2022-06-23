import {EndPoints} from '@/types/cmsType'
import ReaderLayout from '@/components/common/readerLayout'
import SectionTitle from '@/components/common/sectionTitle'
import Content from '@/components/common/content'

export type CompanyInformationProps = {
  post: EndPoints['get']['news']
}

const CompanyInformation = ({post}: CompanyInformationProps) => {
  return (
    <ReaderLayout>
      <SectionTitle>{post.title}</SectionTitle>
      <Content content={post.content} />
    </ReaderLayout>
  )
}

export default CompanyInformation