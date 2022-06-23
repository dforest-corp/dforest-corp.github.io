import {EndPoints} from '@/types/cmsType'
import ReaderLayout from '@/components/common/readerLayout'
import SectionTitle from '@/components/common/sectionTitle'
import Content from '@/components/common/content'

type NewsViewProps = {
  news: EndPoints['get']['news']
}

const NewsView = ({news}: NewsViewProps) => {
  return (
    <ReaderLayout>
      <div className='grid gap-10'>
        <SectionTitle>{news.title}</SectionTitle>
        <Content content={news.content} />
      </div>
    </ReaderLayout>
  )
}

export default NewsView