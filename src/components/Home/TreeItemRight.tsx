import Image from 'next/image'
import {ReactNode} from 'react'
import TreeItemText from './TreeItemText'

type TreeItemRightProps = {
  src: string
  title: string
  children: ReactNode
}

const TreeItemRight = ({title, src, children}: TreeItemRightProps) => {
  return (
    <div className='flex flex-col md:flex-row items-center'>
      <TreeItemText title={title}>{children}</TreeItemText>
      <div className='flex-1 ml-0 md:ml-4 mt-4 md:mt-0 text-center'>
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