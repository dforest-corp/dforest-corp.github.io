import Link from 'next/link'

const Header = () => {
  return (
    <header className='p-6'>
      <h1 className='text-3xl font-bold text-green-800 italic'>
        <Link href='/'>D-FOREST</Link>
      </h1>
    </header>
  )
}

export default Header