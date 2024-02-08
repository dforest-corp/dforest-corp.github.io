import {Html, Head, Main, NextScript} from 'next/document'

export default function Document() {
  return (
    <Html lang='ja'>
      <Head>
        <meta name='theme-color' content='#084E3B' />
        <link rel='shortcut icon' href='/favicon.svg' sizes='any' type='image/svg+xml' />
        <link rel='mask-icon' href='/favicon.svg' color='#084E3B' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='anonymous' />
        <link href='https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700;900&display=swap'
              rel='stylesheet' />
        <meta httpEquiv='refresh' content='0;URL=https://d-forest-corp.com'/>
      </Head>
      <body>
      <Main />
      <NextScript />
      </body>
    </Html>
  )
}
