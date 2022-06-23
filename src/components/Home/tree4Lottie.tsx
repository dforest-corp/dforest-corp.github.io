import {useEffect, useState} from 'react'
import TreeLottie from '@/components/Home/treeLottie'

const Tree4Lottie = () => {
  const [animationData, setAnimationData] = useState<any>()

  useEffect(() => {
    import('@/lottie/tree4.json').then(setAnimationData)
  }, [])

  if (animationData === undefined) {
    return <></>
  }
  return <TreeLottie animationData={animationData} />
}

export default Tree4Lottie