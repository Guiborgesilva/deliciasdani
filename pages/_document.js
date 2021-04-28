import Document, { Html, Head, Main, NextScript } from'next/document'
import React from 'react'

export default class MyDocument extends Document{
  render() {
    return(
      <Html>
        <Head>
          <link rel="shortcut icon" href="icon.png" type="image/png"/>
          <link rel="favicon" href="icon.png" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />
          <meta charSet="utf-8" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
      )
  }
}