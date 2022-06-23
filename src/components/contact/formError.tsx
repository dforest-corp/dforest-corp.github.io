import {FieldError} from 'react-hook-form'

export type FormErrorProps = {
  error: FieldError | undefined
}

const FormError = ({error}: FormErrorProps) => {
  if (error === undefined) {
    return <></>
  }
  return (
    <p className='text-red-500'>{error.message}</p>
  )
}

export default FormError