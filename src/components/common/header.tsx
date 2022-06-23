import Link from 'next/link'
import DropDownMenu from '../home/dropDownMenu'

const Header = () => {
  return (
    <header>
      <div className='py-6 px-4 xl:px-0 flex flex-row max-w-screen-xl mx-auto'>
        <h1 className='text-3xl font-bold text-green-800 italic'>
          <Link href='/src/pages'>D-FOREST</Link>
        </h1>
        <ul className='hidden md:flex flex-row ml-auto space-x-6 text-lg text-gray-800'>
          <li>
            <Link href='/src/pages/company'>
              会社案内
            </Link>
          </li>
          <li>
            <Link href='/src/pages/works'>
              事業内容
            </Link>
          </li>
          <li>
            <Link href='/src/pages/contacts'>
              お問い合わせ
            </Link>
          </li>
        </ul>
        <DropDownMenu />
      </div>
    </header>
  )
}

export default Header