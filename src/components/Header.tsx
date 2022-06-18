import Link from 'next/link'
import DropDownMenu from './Home/DropDownMenu'

const Header = () => {
  return (
    <header className='p-6 flex flex-row'>
      <h1 className='text-3xl font-bold text-green-800 italic'>
        <Link href='/'>D-FOREST</Link>
      </h1>
      <ul className='hidden md:flex flex-row ml-auto space-x-6 text-lg text-gray-800'>
        <li>
          <Link href=''>
            会社案内
          </Link>
        </li>
        <li>
          <Link href=''>
            事業内容
          </Link>
        </li>
        <li>
          <Link href=''>
            お問い合わせ
          </Link>
        </li>
      </ul>
      <DropDownMenu />
    </header>
  )
}

export default Header