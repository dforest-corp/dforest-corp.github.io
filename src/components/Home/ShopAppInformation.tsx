import Image from 'next/image'

const ShopAppInformation = () => {
  return (
    <div className='text-center px-2 py-20 bg-green-50'>
      <h3 className='text-2xl lg:text-4xl font-bold xl:font-black tracking-wider'>ショップdeアプリ</h3>
      <p className='mt-2 text-lg tracking-wider'>簡単操作で集客＆リピーターup!</p>
      <p className='mt-6 tracking-wider leading-relaxed'>
        恋する集客・販促アプリ「ショップdeアプリ」でどんどん”ラブレター”を送り、<br />
        お店に心と足を向けてもらいましょう。
      </p>
      <div className='mt-8'>
        <Image src='/images/shop-app.webp'
               alt='ショップdeアプリ'
               className='rounded-lg shadow-lg'
               width={750}
               height={500} />
      </div>
    </div>
  )
}

export default ShopAppInformation