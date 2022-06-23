import {DefaultSeo} from 'next-seo'

const AppDefaultSeo = () => {
  return (
    <DefaultSeo
      openGraph={{
        type: 'website',
        locale: 'ja_JP',
        url: 'https://d-forest-corp.com',
        site_name: 'D-FOREST',
        images: [
          {
            url: 'https://d-forest-corp.com/ogp.png'
          }
        ]
      }}
      twitter={{
        cardType: 'summary'
      }}
    />
  )
}

export default AppDefaultSeo