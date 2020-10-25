import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'

class MyDocument extends Document {
//   static async getInitialProps(ctx: DocumentContext) {
//     const initialProps = await Document.getInitialProps(ctx)
//     return { ...initialProps }
//   }

  render() {
    return (
      <Html>
        <Head>
            <title>Acty</title>
            <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Text&family=Open+Sans&family=Roboto+Mono&family=Roboto:wght@700&display=swap" rel="stylesheet" />

        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument