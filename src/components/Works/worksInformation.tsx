import {EndPoints} from '@/types/cms-types'
import parse from 'html-react-parser'

type WorksInformationProps = {
  post: EndPoints['get']['news']
}

const WorksInformation = ({post}: WorksInformationProps) => {
  return (
    <div className='max-w-screen-sm mx-auto px-4 xl:px-0 py-20'>
      <h2 className='text-3xl font-bold'>{post.title}</h2>
      <div className='mt-10 min-h-[400px] prose prose-blue max-w-none'>
        {parse(post.content)}
      </div>
    </div>
  )
}

export default WorksInformation