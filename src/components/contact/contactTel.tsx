import ReaderLayout from '@/components/common/readerLayout'

const ContactTel = () => {
  return (
    <ReaderLayout>
      <h2 className='text-3xl tracking-wider font-bold tracking-wide'>お問い合わせ</h2>
      <p className='mt-4 tracking-wide'>
        電話でのお問い合わせの場合は、<br />
        <strong>06-6809-7520</strong> (9:30から17:00まで）
      </p>
      <p>
        またはメールの場合、以下のお問い合わせフォームへご記入の上、送信してください。
      </p>
    </ReaderLayout>
  )
}

export default ContactTel