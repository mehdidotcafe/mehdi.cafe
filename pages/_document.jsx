import React from 'react'
import { ServerStyleSheet } from 'styled-components'
import Document, {
  Html, Head, Main, NextScript,
} from 'next/document'

class MainDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage
    try {
      ctx.renderPage = () => originalRenderPage({
        // eslint-disable-next-line
        enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
      })
      const initialProps = await Document.getInitialProps(ctx)

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html lang="fr">
        <Head>
          <meta charSet="UTF-8" />
          <link rel="shortcut icon" href="/favicon.ico" />
          <meta property="og:image" content="/favicon.ico" />
          <meta name="theme-color" content="#29154e" />
          <link rel="manifest" href="/manifest.json" />

          <meta name="robots" content="noimageindex" />

          <meta property="og:description" content="Développeur Freelance basé à Marseille. Je vous accompagne dans la réalisation de votre projet numérique, site internet, application mobile." />
          <meta property="twitter:description" content="Développeur Freelance basé à Marseille. Je vous accompagne dans la réalisation de votre projet numérique, site internet, application mobile." />
          <meta description="true" name="description" content="Développeur Freelance basé à Marseille. Je vous accompagne dans la réalisation de votre projet numérique, site internet, application mobile." />
          <link href="https://fonts.googleapis.com/css?family=Roboto:100,400|Major+Mono+Display|EB+Garamond|Oswald:700" rel="stylesheet" />
          <meta property="og:title" content="Mehdi Meddour | Développeur Freelance WEB / LOGICIEL" />
          <meta property="twitter:title" content="Mehdi Meddour | Développeur Freelance WEB / LOGICIEL" />
          <meta property="og:site_name" content="Mehdi Meddour" />
          <meta property="og:url" content="https://meddou.com" />

          <meta property="og:type" content="website" />

          <meta property="twitter:image" content="https://meddou.com/images-webp/mehdi.png" />
          <meta property="og:image" content="https://meddou.com/images-webp/mehdi.png" />
          <link rel="stylesheet" type="text/css" href="/css/index.css" media="screen" />
          <link rel="stylesheet" type="text/css" href="/css/slick.min.css" media="screen" />
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          />
          {/* eslint-disable */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
          {/* eslint-enable */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MainDocument
