import {Html, Head, Main, NextScript} from 'next/document'

export default function Document() {
  return (
    <Html lang='ja'>
      <Head>
        <meta name="theme-color" content="#084E3B"/>
        <link rel="shortcut icon" href="/favicon.svg" sizes="any" type="image/svg+xml"/>
        <link rel="mask-icon" href="/favicon.svg" color="#084E3B"/>
      </Head>
      <body>
      <Main />
      <NextScript />
      </body>
    </Html>
  )
}