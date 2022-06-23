import {useEffect, useState} from 'react'
import TreeLottie from '@/components/home/treeLottie'

const Tree1Lottie = () => {
  const [animationData, setAnimationData] = useState<any>()

  useEffect(() => {
    import('@/lottie/tree1.json').then(setAnimationData)
  }, [])

  if (animationData === undefined) {
    return <></>
  }
  return <TreeLottie animationData={animationData} />
}

export default Tree1Lottie