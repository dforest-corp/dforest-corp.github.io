import {EndPoints} from '@/types/cmsType'
import HtmlView from '@/components/common/htmlView'
import ReaderLayout from '@/components/common/readerLayout'
import SectionTitle from '@/components/common/sectionTitle'

type NewsViewProps = {
  news: EndPoints['get']['news']
}

const NewsView = ({news}: NewsViewProps) => {
  return (
    <ReaderLayout>
      <SectionTitle>{news.title}</SectionTitle>
      <div className='mt-10 prose prose-blue max-w-none'>
        <HtmlView html={news.content} />
      </div>
    </ReaderLayout>
  )
}

export default NewsView