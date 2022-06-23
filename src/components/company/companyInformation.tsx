import {EndPoints} from '@/types/cmsType'
import HtmlView from '@/components/common/htmlView'
import ReaderLayout from '@/components/common/readerLayout'

export type CompanyInformationProps = {
  post: EndPoints['get']['news']
}

const CompanyInformation = ({post}: CompanyInformationProps) => {
  return (
    <ReaderLayout>
      <h2 className='text-3xl tracking-wider font-bold'>{post.title}</h2>
      <div className='mt-10 prose prose-blue max-w-none'>
        <HtmlView html={post.content} />
      </div>
    </ReaderLayout>
  )
}

export default CompanyInformation