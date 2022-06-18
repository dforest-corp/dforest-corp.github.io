import Image from 'next/image'
import TreeItemRight from './TreeItemRight'
import TreeItemLeft from './TreeItemLeft'

const ServiceTree = () => {
  return (
    <div className='bg-green-50'>
      <div className='max-w-screen-xl mx-auto px-4 xl:px-0 py-40 space-y-40'>
        <TreeItemRight src={'/images/tree-1.jpg'} title='スマートフォンアプリ開発'>
          スマートフォン、タブレット向けソフトウェアを中心にお客様のニーズに合わせ、ソフトウェアを開発いたします。<br />
          現在のお客様のお手持ちのソフトウエア、システムをタブレットなどでご活用になりたい場合なども、ご相談ください。
        </TreeItemRight>
        <TreeItemLeft src={'/images/tree-2.jpg'} title={'Webアプリケーション'}>
          Webアプリを制作します。スマートフォンへの対応もおまかせください。<br />
          またデータベースからの商品一覧、スライドショー、お客様によるニュースなどの変更、商品の変更などプログラミングの必要なサイトも承ります。
        </TreeItemLeft>
        <TreeItemRight src={'/images/tree-3.jpg'} title='ITコンサルティング'>
          様々な業務に合わせ、ハードウェア、パッケージソフト、WEBアプリケーションの開発など、業務に向けた最適なソリューションを当社のネットワークにてご提案させていただきます。<br />
          また、小規模のネット環境でも重要となってきたセキュリティの確保についてもご相談ください。オフィスでのUTM(Unified Threat Management)装置をご提案します。
        </TreeItemRight>
        <TreeItemLeft src={'/images/tree-4.jpg'} title={'ホームページ制作'}>
          ホームページを制作します。スマートフォンへの対応もおまかせください。<br />
          またデータベースからの商品一覧、スライドショー、お客様によるニュースなどの変更、商品の変更などプログラミングの必要なサイトも承ります。
        </TreeItemLeft>
      </div>
    </div>
  )
}

export default ServiceTree