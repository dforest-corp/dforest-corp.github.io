import TreeItemRight from './TreeItemRight'
import TreeItemLeft from './TreeItemLeft'
import tree1Animation from '@/lottie/tree1.json'
import tree2Animation from '@/lottie/tree2.json'
import tree3Animation from '@/lottie/tree3.json'
import tree4Animation from '@/lottie/tree4.json'

const ServiceTree = () => {
  return (
    <div
      className='relative after:content-[""] after:absolute  after:left-0 after:top-0 after:-skew-y-6 after:origin-top-right after:-z-10 after:w-full after:h-full after:bg-emerald-900'>
      <div className='overflow-x-hidden'>
        <div className='max-w-screen-xl mx-auto px-4 xl:px-0 pt-40 xl:pt-80 pb-20 xl:pb-40 space-y-20 xl:space-y-40'>
          <TreeItemRight lottieData={tree1Animation} title='スマートフォンアプリ開発'>
            スマートフォン、タブレット向けソフトウェアを中心にお客様のニーズに合わせ、ソフトウェアを開発いたします。<br />
            現在のお客様のお手持ちのソフトウエア、システムをタブレットなどでご活用になりたい場合なども、ご相談ください。
          </TreeItemRight>
          <TreeItemLeft lottieData={tree2Animation} title={'Webアプリケーション'}>
            Webアプリを制作します。スマートフォンへの対応もおまかせください。<br />
            またデータベースからの商品一覧、スライドショー、お客様によるニュースなどの変更、商品の変更などプログラミングの必要なサイトも承ります。
          </TreeItemLeft>
          <TreeItemRight lottieData={tree3Animation} title='ITコンサルティング'>
            様々な業務に合わせ、ハードウェア、パッケージソフト、WEBアプリケーションの開発など、業務に向けた最適なソリューションを当社のネットワークにてご提案させていただきます。<br />
            また、小規模のネット環境でも重要となってきたセキュリティの確保についてもご相談ください。オフィスでのUTM(Unified Threat Management)装置をご提案します。
          </TreeItemRight>
          <TreeItemLeft lottieData={tree4Animation} title={'ホームページ制作'}>
            ホームページを制作します。スマートフォンへの対応もおまかせください。<br />
            またデータベースからの商品一覧、スライドショー、お客様によるニュースなどの変更、商品の変更などプログラミングの必要なサイトも承ります。
          </TreeItemLeft>
        </div>
      </div>
    </div>
  )
}

export default ServiceTree