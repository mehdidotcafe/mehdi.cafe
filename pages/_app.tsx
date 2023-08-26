import Head from 'next/head'
import { useTheme } from 'styled-components'

import Analytics from '@Analytics'
import {
  DOMAIN,
  DOMAIN_PROTOCOL,
} from '@env'
import Header from '@Header'
import ThemeGlobalStyle from '@theme/ThemeGlobalStyle'
import ThemeProvider from '@theme/ThemeProvider'
import useTranslations from '@translation/useTranslations'

import type { FC } from 'react'

const NestedHead = () => {
  const theme = useTheme()
  const t = useTranslations()

  return (
    <Head>
      <title>{`${t.userIdentity} | ${t.home.title}`}</title>
      <meta charSet="UTF-8" />
      <meta name="theme-color" content={theme.mainColor} />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <link rel="manifest" href="/manifest.webmanifest" />
      <meta name="robots" content="noimageindex" />
      <meta name="description" content={t.home.shortDescription} />

      <meta property="twitter:description" content={t.home.shortDescription} />
      <meta property="twitter:title" content={t.home.title} />
      <meta property="twitter:image" content={`${DOMAIN_PROTOCOL}://${DOMAIN}/images/twitter.png`} />
      <meta property="twitter:title" content={t.home.title} />

      <meta property="og:type" content="website" />
      <meta property="og:description" content={t.home.shortDescription} />
      <meta property="og:image" content={`${DOMAIN_PROTOCOL}://${DOMAIN}/images/facebook.png`} />
      <meta property="og:image:url" content={`${DOMAIN_PROTOCOL}://${DOMAIN}/images/facebook.png`} />
      <meta property="og:site_name" content={t.home.title} />
      <meta property="og:url" content={`${DOMAIN_PROTOCOL}://${DOMAIN}`} />
    </Head>
  )
}

const App = ({
  Component,
  pageProps,
}: {
  Component: FC,
  pageProps: Record<string, unknown>
}) => (
  <ThemeProvider>
    <NestedHead />
    <ThemeGlobalStyle />
    <Header />
    <Component {...pageProps} />
    <Analytics />
  </ThemeProvider>
)

export default App
