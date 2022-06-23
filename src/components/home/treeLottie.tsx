import {useMemo} from 'react'
import Lottie, {Options} from 'react-lottie'

export type TreeLottieProps = {
  animationData: any
}

const TreeLottie = ({animationData}: TreeLottieProps) => {
  const defaultOptions = useMemo((): Options => ({
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid meet'
    }
  }), [animationData])

  return (
    <Lottie options={defaultOptions}
            isClickToPauseDisabled
            style={{cursor: 'default', maxWidth: 1000}} />
  )
}

export default TreeLottie