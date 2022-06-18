import Image from 'next/image'
import {ReactNode} from 'react'

type TreeItemLeftProps = {
  src: string
  title: string
  children: ReactNode
}

const TreeItemLeft = ({src, title, children}: TreeItemLeftProps) => {
  return (
    <div className='flex flex-col-reverse xl:flex-row items-center'>
      <div className='flex-1 mr-0 xl:mr-4 mt-4 xl:mt-0  text-center'>
        <Image src={src}
               alt={title}
               className='rounded-md mx-auto'
               objectFit='cover'
               width={512}
               height={376} />
      </div>
      <div className='flex-1'>
        <h6 className='text-3xl font-bold xl:font-black tracking-wide'>{title}</h6>
        <p className='mt-4 leading-relaxed'>
          {children}
        </p>
      </div>
    </div>
  )
}

export default TreeItemLeft