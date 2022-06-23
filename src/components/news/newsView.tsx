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
      <SectionTitle>{news.title}</SectionTitle>
      <Content content={news.content} />
    </ReaderLayout>
  )
}

export default NewsView