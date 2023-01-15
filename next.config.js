console.log(JSON.stringify(process.env, null, 2))

/** @type {import('next').NextConfig} */
module.exports = {
  trailingSlash: true,
  compiler: {
    styledComponents: true,
  },

  i18n: process.env.ENV !== 'development' ? {
    locales: ['en', 'fr'],
    defaultLocale: process.env.DEFAULT_LOCALE,
    domains: [
      {
        domain: process.env.NEXT_PUBLIC_DOMAIN_EN,
        defaultLocale: 'en',
      },
      {
        domain: process.env.NEXT_PUBLIC_DOMAIN_FR,
        defaultLocale: 'fr',
      },
    ],
  } : undefined,
}
