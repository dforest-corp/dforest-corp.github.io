import Image from 'next/image'
import {ReactNode} from 'react'
import TreeItemText from './TreeItemText'

type TreeItemLeftProps = {
  src: string
  title: string
  children: ReactNode
}

const TreeItemLeft = ({src, title, children}: TreeItemLeftProps) => {
  return (
    <div className='flex flex-col-reverse md:flex-row items-center'>
      <div className='flex-1 mr-0 md:mr-4 mt-4 md:mt-0  text-center'>
        <Image src={src}
               alt={title}
               className='rounded-md mx-auto'
               objectFit='cover'
               width={512}
               height={376} />
      </div>
      <TreeItemText title={title}>{children}</TreeItemText>
    </div>
  )
}

export default TreeItemLeft