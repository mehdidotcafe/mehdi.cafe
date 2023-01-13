import { useEffect } from 'react'
import { type NextRouter, useRouter } from 'next/router'
import Script from 'next/script'

import { GOOGLE_ANALYTICS } from '@env'

const useWatchAndSendNavigationEvents = (router: NextRouter) => {
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      window.gtag('config', GOOGLE_ANALYTICS, {
        page_path: url,
      })
    }

    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])
}

const Analytics = () => {
  const router = useRouter()

  useWatchAndSendNavigationEvents(router)

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS}`}
        strategy="afterInteractive"
      />
      <Script id="ga">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
        `}
      </Script>
    </>
  )
}

export default Analytics
