import {EndPoints} from '@/types/cmsType'
import HtmlView from '@/components/common/htmlView'
import ReaderLayout from '@/components/common/readerLayout'

type WorksInformationProps = {
  post: EndPoints['get']['news']
}

const WorksInformation = ({post}: WorksInformationProps) => {
  return (
    <ReaderLayout>
      <h2 className='text-3xl tracking-wider font-bold'>{post.title}</h2>
      <div className='mt-10 min-h-[400px] prose prose-blue max-w-none'>
        <HtmlView html={post.content} />
      </div>
    </ReaderLayout>
  )
}

export default WorksInformation