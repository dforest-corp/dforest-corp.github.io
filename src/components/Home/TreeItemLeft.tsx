import {ReactNode, useEffect} from 'react'
import TreeItemText from './TreeItemText'
import {motion, useAnimation} from 'framer-motion'
import {useInView} from 'react-intersection-observer'
import TreeLottie from '@/components/Home/treeLottie'

const boxVariant = {
  visible: {opacity: 1, x: 0, transition: {duration: 0.5}},
  hidden: {opacity: 0, x: -500}
}

type TreeItemLeftProps = {
  lottieData: any
  title: string
  children: ReactNode
}

const TreeItemLeft = ({lottieData, title, children}: TreeItemLeftProps) => {
  const control = useAnimation()
  const [ref, inView] = useInView({
    rootMargin: '-20%',
    triggerOnce: true
  })
  useEffect(() => {
    if (inView) {
      control.start('visible')
    }
  }, [control, inView])

  return (
    <div ref={ref}>
      <motion.div
        className='flex flex-col-reverse md:flex-row items-center'
        initial={'hidden'}
        animate={control}
        variants={boxVariant}>
        <div className='flex-1 mr-0 md:mr-4 mt-4 md:mt-0  text-center'>
          <TreeLottie animationData={lottieData} />
        </div>
        <TreeItemText title={title}>{children}</TreeItemText>
      </motion.div>
    </div>
  )
}

export default TreeItemLeft