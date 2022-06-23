import {EndPoints} from '@/types/cmsType'
import HtmlView from '@/components/common/htmlView'

type NewsViewProps = {
  news: EndPoints['get']['news']
}

const NewsView = ({news}: NewsViewProps) => {
  return (
    <div>
      <article className='max-w-screen-sm mx-auto px-4 xl:px-0'>
        <h2 className='text-3xl tracking-wider font-bold'>{news.title}</h2>
        <div className='mt-10 prose prose-blue max-w-none'>
          <HtmlView html={news.content} />
        </div>
      </article>
    </div>
  )
}

export default NewsView