import {DefaultSeoProps} from 'next-seo'

const seoConfig: DefaultSeoProps = {
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: 'https://d-forest-corp.com',
    site_name: 'D-FOREST'
  },
  twitter: {
    cardType: 'summary'
  }
}

export default seoConfig