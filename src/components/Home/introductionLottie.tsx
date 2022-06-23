import Lottie, {Options} from 'react-lottie'
import {useMemo} from 'react'
import animationData from '@/lottie/intro.json'

const IntroductionLottie = () => {
  const defaultOptions = useMemo((): Options => ({
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    },
  }), [])

  return (
    <Lottie options={defaultOptions}
            isClickToPauseDisabled
            style={{cursor: 'default', maxWidth: 1000}}/>
  )
}

export default IntroductionLottie