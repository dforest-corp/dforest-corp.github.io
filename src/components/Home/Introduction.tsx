import Link from 'next/link'
import {MdArrowForward} from 'react-icons/md'

const Introduction = () => {
  return (
    <div className='max-w-screen-xl mx-auto px-4 xl:px-0 pt-20 xl:pt-40 pb-20 xl:pb-32'>
      <h2
        className='text-2xl text-center lg:text-5xl leading-normal lg:leading-relaxed font-bold xl:font-black tracking-wider'>
        多様な環境のお客様に<br />
        最適なITソリューションを
      </h2>
      <p className='mt-4 text-center tracking-wider'>
        Creative Web and Smart phone application
      </p>
      <p className='mt-8'>
        <Link href=''>
          <a
            className='mx-auto flex flex-row items-center w-fit bg-green-700 hover:bg-white border border-green-700 text-white hover:text-green-700 p-4 shadow-lg transition rounded-md'>
              <span className='tracking-wider text-lg'>
                お問い合せください
              </span>
            <MdArrowForward className='text-lg ml-2' />
          </a>
        </Link>
      </p>
    </div>
  )
}

export default Introduction