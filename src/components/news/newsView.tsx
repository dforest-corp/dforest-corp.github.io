import parse from 'html-react-parser'
import {EndPoints} from '@/types/cmsType'

type NewsViewProps = {
  news: EndPoints['get']['news']
}

const NewsView = ({news}: NewsViewProps) => {
  return (
    <div>
      <article className='max-w-screen-sm mx-auto px-4 xl:px-0'>
        <h2 className='text-3xl tracking-wider font-bold'>{news.title}</h2>
        <div className='mt-10 prose prose-blue max-w-none'>{parse(news.content)}</div>
      </article>
    </div>
  )
}

export default NewsView