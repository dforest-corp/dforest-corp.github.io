import {EndPoints} from '@/types/cmsType'
import HtmlView from '@/components/common/htmlView'
import ReaderLayout from '@/components/common/readerLayout'
import SectionTitle from '@/components/common/sectionTitle'

type WorksInformationProps = {
  post: EndPoints['get']['news']
}

const WorksInformation = ({post}: WorksInformationProps) => {
  return (
    <ReaderLayout>
      <SectionTitle>{post.title}</SectionTitle>
      <div className='mt-10 min-h-[400px] prose prose-blue max-w-none'>
        <HtmlView html={post.content} />
      </div>
    </ReaderLayout>
  )
}

export default WorksInformation