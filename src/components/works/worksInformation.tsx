import {EndPoints} from '@/types/cmsType'
import ReaderLayout from '@/components/common/readerLayout'
import SectionTitle from '@/components/common/sectionTitle'
import Content from '@/components/common/content'

type WorksInformationProps = {
  post: EndPoints['get']['news']
}

const WorksInformation = ({post}: WorksInformationProps) => {
  return (
    <ReaderLayout>
      <SectionTitle>{post.title}</SectionTitle>
      <Content content={post.content} />
    </ReaderLayout>
  )
}

export default WorksInformation