import {PropsWithChildren} from 'react'

export type MayBeProps = PropsWithChildren & {
  test: boolean
}

const MayBe = ({test, children}: MayBeProps) => <>{test && children}</>

export default MayBe