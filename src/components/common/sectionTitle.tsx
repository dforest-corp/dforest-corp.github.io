import {PropsWithChildren} from 'react'

const SectionTitle = ({children}: PropsWithChildren) => {
  return (
    <h2 className='text-3xl tracking-wider font-bold'>
      {children}
    </h2>
  )
}

export default SectionTitle