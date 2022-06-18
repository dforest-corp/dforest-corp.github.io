import Image from 'next/image'
import {ReactNode} from 'react'

type TreeItemRightProps = {
  src: string
  title: string
  children: ReactNode
}

const TreeItemRight = ({title, src, children}: TreeItemRightProps) => {
  return (
    <div className='flex flex-col xl:flex-row items-center'>
      <div className='flex-1'>
        <h6 className='text-3xl font-bold xl:font-black tracking-wide'>{title}</h6>
        <p className='mt-4 leading-relaxed'>
          {children}
        </p>
      </div>
      <div className='flex-1 ml-0 xl:ml-4 mt-4 xl:mt-0 text-center'>
        <Image src={src}
               alt={title}
               className='rounded-md mx-auto'
               objectFit='cover'
               width={512}
               height={376} />
      </div>
    </div>
  )
}

export default TreeItemRight