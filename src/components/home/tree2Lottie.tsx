import {useEffect, useState} from 'react'
import TreeLottie from '@/components/home/treeLottie'

const Tree2Lottie = () => {
  const [animationData, setAnimationData] = useState<any>()

  useEffect(() => {
    import('@/lottie/tree2.json').then(setAnimationData)
  }, [])

  if (animationData === undefined) {
    return <></>
  }
  return <TreeLottie animationData={animationData} />
}

export default Tree2Lottie