import {useContactFormHook} from '@/components/Contact/contactForm/hooks'
import FormError from '@/components/Contact/formError'

const ContactForm = () => {
  const {register, handleSubmitForm, errors} = useContactFormHook()
  return (
    <div>
      <div className='max-w-screen-sm mx-auto px-4 xl:px-0'>
        <form className='grid grid-cols-1 gap-4' onSubmit={handleSubmitForm}>
          <div>
            <label>お名前 (必須)</label>
            <input
              {...register('name')}
              type='text'
              className='mt-2 block w-full rounded shadow border-gray-300' />
            <FormError error={errors.name} />
          </div>
          <div>
            <label>メールアドレス (必須)</label>
            <input
              {...register('email')}
              type='email'
              className='mt-2 block w-full rounded shadow border-gray-300' />
            <FormError error={errors.email} />
          </div>
          <div>
            <label>タイトル</label>
            <input
              {...register('title')}
              type='text'
              className='mt-2 block w-full rounded shadow border-gray-300' />
            <FormError error={errors.title} />
          </div>
          <div>
            <label>お問い合せ内容</label>
            <textarea
              {...register('message')}
              className='mt-2 block w-full rounded shadow border-gray-300 resize-none'
              rows={8} />
            <FormError error={errors.message} />
          </div>
          <button
            type='submit'
            className='mt-8 bg-emerald-900 text-white text-lg p-4 rounded'>
            送信
          </button>
        </form>
      </div>
    </div>
  )
}

export default ContactForm