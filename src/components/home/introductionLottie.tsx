import Lottie, {Options} from 'react-lottie'
import {useEffect, useMemo, useState} from 'react'

const IntroductionLottie = () => {
  const [animationData, setAnimationData] = useState<any>()

  const defaultOptions = useMemo((): Options => ({
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }), [animationData])

  useEffect(() => {
    import('@/lottie/intro.json').then(setAnimationData)
  }, [])

  if (animationData === undefined) {
    return <></>
  }

  return (
    <Lottie options={defaultOptions}
            isClickToPauseDisabled
            style={{cursor: 'default', maxWidth: 1000}} />
  )
}

export default IntroductionLottie