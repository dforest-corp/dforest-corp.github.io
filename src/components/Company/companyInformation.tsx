import {EndPoints} from '@/types/cms-types'
import parse from 'html-react-parser'

export type CompanyInformationProps = {
  post: EndPoints['get']['news']
}

const CompanyInformation = ({post}: CompanyInformationProps) => {
  return (
    <div className='py-20'>
      <div className='max-w-screen-sm mx-auto px-4 xl:px-0'>
        <h2 className='text-3xl font-bold'>{post.title}</h2>
        <div className='mt-10 prose prose-blue max-w-none'>
          {parse(post.content)}
        </div>
      </div>
    </div>
  )
}

export default CompanyInformation