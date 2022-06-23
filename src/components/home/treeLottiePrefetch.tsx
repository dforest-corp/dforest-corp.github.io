import Head from 'next/head'

const TreeLottiePrefetch = () => {
  return (
    <Head>
      <link rel='preload' href='/lottie/tree1.json' as='fetch' crossOrigin='anonymous' />
      <link rel='preload' href='/lottie/tree2.json' as='fetch' crossOrigin='anonymous' />
      <link rel='preload' href='/lottie/tree3.json' as='fetch' crossOrigin='anonymous' />
      <link rel='preload' href='/lottie/tree4.json' as='fetch' crossOrigin='anonymous' />
    </Head>
  )
}

export default TreeLottiePrefetch