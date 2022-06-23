import {PropsWithChildren} from 'react'

const ReaderLayout = ({children}: PropsWithChildren) => {
  return (
    <div>
      <div className='max-w-screen-sm mx-auto px-4 xl:px-0'>
        {children}
      </div>
    </div>
  )
}

export default ReaderLayout