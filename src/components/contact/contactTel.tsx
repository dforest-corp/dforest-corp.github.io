import ReaderLayout from '@/components/common/readerLayout'
import SectionTitle from '@/components/common/sectionTitle'

const ContactTel = () => {
  return (
    <ReaderLayout>
      <SectionTitle>お問い合わせ</SectionTitle>
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