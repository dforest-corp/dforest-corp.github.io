import {EndPoints} from '@/types/cmsType'
import HtmlView from '@/components/common/htmlView'
import ReaderLayout from '@/components/common/readerLayout'

type NewsViewProps = {
  news: EndPoints['get']['news']
}

const NewsView = ({news}: NewsViewProps) => {
  return (
    <ReaderLayout>
      <h2 className='text-3xl tracking-wider font-bold'>{news.title}</h2>
      <div className='mt-10 prose prose-blue max-w-none'>
        <HtmlView html={news.content} />
      </div>
    </ReaderLayout>
  )
}

export default NewsView