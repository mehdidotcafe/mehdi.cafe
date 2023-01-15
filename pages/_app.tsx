import Analytics from '@Analytics'
import {
  DOMAIN,
  DOMAIN_PROTOCOL,
} from '@env'
import Header from '@Header'
import ThemeGlobalStyle from '@theme/ThemeGlobalStyle'
import ThemeProvider from '@theme/ThemeProvider'
import useTranslations from '@translation/useTranslations'
import Head from 'next/head'
import type { FC } from 'react'

const App = ({
  Component,
  pageProps,
}: {
  Component: FC,
  pageProps: Record<string, unknown>
}) => {
  const t = useTranslations()

  return (
    <ThemeProvider>
      <Head>
        <title>{t.app.title}</title>
        <meta charSet="UTF-8" />
        <meta name="theme-color" content="#29154e" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link rel="manifest" href="/manifest.webmanifest" />
        <meta name="robots" content="noimageindex" />
        <meta name="description" content={t.app.description} />

        <meta property="twitter:description" content={t.app.description} />
        <meta property="twitter:title" content={t.app.title} />
        <meta property="twitter:image" content={`${DOMAIN_PROTOCOL}://${DOMAIN}/images/twitter.png`} />

        <meta property="twitter:title" content={t.app.title} />
        <meta property="og:type" content="website" />
        <meta property="og:description" content={t.app.description} />
        <meta property="og:image" content={`${DOMAIN_PROTOCOL}://${DOMAIN}/images/facebook.png`} />
        <meta property="og:image:url" content={`${DOMAIN_PROTOCOL}://${DOMAIN}/images/facebook.png`} />
        <meta property="og:site_name" content={t.app.title} />
        <meta property="og:url" content={`${DOMAIN_PROTOCOL}://${DOMAIN}`} />
      </Head>
      <ThemeGlobalStyle />
      <Header />
      <Component {...pageProps} />
      <Analytics />
    </ThemeProvider>
  )
}

export default App
