import {memo, useEffect, useMemo, useState} from 'react'
import Lottie, {Options} from 'react-lottie'
import ky from 'ky-universal'

export type TreeLottieProps = {
  animationPath: any
}

const TreeLottie = memo(({animationPath}: TreeLottieProps) => {
  const [animationData, setAnimationData] = useState<any>()

  useEffect(() => {
    ky.get(animationPath).json<any>().then(setAnimationData)
  }, [animationPath])

  const defaultOptions = useMemo((): Options => ({
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid meet'
    }
  }), [animationData])

  if (animationData === undefined) {
    return <></>
  }

  return (
    <Lottie options={defaultOptions}
            isClickToPauseDisabled
            style={{cursor: 'default', maxWidth: 1000}} />
  )
})
TreeLottie.displayName = 'TreeLottie'

export default TreeLottie