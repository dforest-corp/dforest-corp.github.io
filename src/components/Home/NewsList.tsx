import Link from 'next/link'
import {DateTime} from 'luxon'
import {EndPoints} from '../../types/cms-types'

type NewsListProps = {
  items: EndPoints['gets']['news']['contents']
}

const NewsList = ({items}: NewsListProps) => {
  return (
    <div className='pt-40 pb-20'>
      <h3 className='text-center font-bold xl:font-black tracking-wider text-3xl'>お知らせ</h3>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-20'>
        {items.map(content => (
          <div key={content.id} className='text-center'>
            <Link href={`/news/${content.id}`}>
              <a className='font-bold' title={content.title}>
                {content.title}
              </a>
            </Link>
            <p className='mt-1'>{DateTime.fromISO(content.publishedAt).toFormat('yyyy年LL月dd日')}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default NewsList