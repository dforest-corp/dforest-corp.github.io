import {ReactNode} from 'react'

type Props = {
  title: string
  children: ReactNode
}

const TreeItemText = ({title, children}: Props) => {
  return (
    <div className='flex-1'>
      <h4 className='text-3xl font-bold xl:font-black tracking-wide text-white'>{title}</h4>
      <p className='mt-4 leading-relaxed text-green-50'>
        {children}
      </p>
    </div>
  )
}

export default TreeItemText