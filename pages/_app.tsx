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
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta charSet="UTF-8" />
        <meta property="og:image" content="/favicon/favicon-16x16.ico" />
        <meta name="theme-color" content="#29154e" />
        <link rel="manifest" href="/manifest.webmanifest" />

        <meta name="robots" content="noimageindex" />

        <meta property="og:description" content={t.app.description} />
        <meta property="twitter:description" content={t.app.description} />
        <meta name="description" content={t.app.description} />
        <meta property="og:title" content={t.app.title} />
        <meta property="twitter:title" content={t.app.title} />
        <meta property="og:site_name" content={t.userIdentity} />
        <meta property="og:url" content={`${DOMAIN_PROTOCOL}://${DOMAIN}`} />

        <meta property="og:type" content="website" />

        <meta property="twitter:image" content={`${DOMAIN_PROTOCOL}://${DOMAIN}/images/user.png`} />
        <meta property="og:image" content={`${DOMAIN_PROTOCOL}://${DOMAIN}/images/user.png`} />
      </Head>
      <ThemeGlobalStyle />
      <Header />
      <Component {...pageProps} />
      <Analytics />
    </ThemeProvider>
  )
}

export default App
