import Analytics from '@Analytics'
import Header from '@Header'
import ThemeGlobalStyle from '@theme/ThemeGlobalStyle'
import ThemeProvider from '@theme/ThemeProvider'
import Head from 'next/head'
import type { FC } from 'react'

const App = ({
  Component,
  pageProps,
}: {
  Component: FC,
  pageProps: Record<string, unknown>
}) => (
  <ThemeProvider>
    <Head>
      <title>Mehdi Meddour | Développeur Freelance WEB / LOGICIEL</title>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta charSet="UTF-8" />
      <meta property="og:image" content="/favicon/favicon-16x16.ico" />
      <meta name="theme-color" content="#29154e" />
      <link rel="manifest" href="/manifest.json" />

      <meta name="robots" content="noimageindex" />

      <meta property="og:description" content="Développeur Freelance basé à Marseille. Je vous accompagne dans la réalisation de votre projet numérique, site internet, application mobile." />
      <meta property="twitter:description" content="Développeur Freelance basé à Marseille. Je vous accompagne dans la réalisation de votre projet numérique, site internet, application mobile." />
      <meta name="description" content="Développeur Freelance basé à Marseille. Je vous accompagne dans la réalisation de votre projet numérique, site internet, application mobile." />
      <meta property="og:title" content="Mehdi Meddour | Développeur Freelance WEB / LOGICIEL" />
      <meta property="twitter:title" content="Mehdi Meddour | Développeur Freelance WEB / LOGICIEL" />
      <meta property="og:site_name" content="Mehdi Meddour" />
      <meta property="og:url" content="https://mehdi.cafe" />

      <meta property="og:type" content="website" />

      <meta property="twitter:image" content="https://mehdi.cafe/images/mehdi.png" />
      <meta property="og:image" content="https://mehdi.cafe/images/mehdi.png" />
    </Head>
    <ThemeGlobalStyle />
    <Header />
    <main>
      <Component {...pageProps} />
    </main>
    <Analytics />
  </ThemeProvider>
)

export default App
