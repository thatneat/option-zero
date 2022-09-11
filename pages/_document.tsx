import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link href="https://fonts.googleapis.com/css?family=IBM Plex Sans:100,200,300,500,600,900" rel="stylesheet" type="text/css"></link>
        <link href="https://fonts.googleapis.com/css?family=Inconsolata:900" rel="stylesheet" type="text/css"></link>
        <link rel="stylesheet" type="text/css" href="/FuturaFuturis.css"></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}