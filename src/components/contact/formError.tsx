import {FieldError} from 'react-hook-form'
import MayBe from '@/components/common/MayBe'

export type FormErrorProps = {
  error: FieldError | undefined
}

const FormError = ({error}: FormErrorProps) => {
  return (
    <MayBe test={error !== undefined}>
      <p className='text-red-500'>{error?.message}</p>
    </MayBe>
  )
}

export default FormError