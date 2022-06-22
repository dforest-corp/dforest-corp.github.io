const ContactForm = () => {
  return (
    <div>
      <div className='max-w-screen-sm mx-auto px-4 xl:px-0'>
        <form className='grid grid-cols-1 gap-2'>
          <div>
            <label>お名前 (必須)</label>
            <input type='text' className='mt-2 block w-full rounded shadow border-gray-300' />
          </div>
          <div>
            <label>メールアドレス (必須)</label>
            <input type='email' className='mt-2 block w-full rounded shadow border-gray-300' />
          </div>
          <div>
            <label>タイトル</label>
            <input type='text' className='mt-2 block w-full rounded shadow border-gray-300' />
          </div>
          <div>
            <label>お問合せ内容</label>
            <textarea className='mt-2 block w-full rounded shadow border-gray-300 resize-none'
                      rows={8} />
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