/** @type {import('next').NextConfig} */
module.exports = {
  trailingSlash: true,
  compiler: {
    styledComponents: true,
  },

  i18n: process.env.ENV !== 'development' && {
    locales: ['en', 'fr'],
    defaultLocale: process.env.DEFAULT_LOCALE,
    domains: [
      {
        domain: process.env.DOMAIN_EN,
        defaultLocale: 'en',
      },
      {
        domain: process.env.DOMAIN_FR,
        defaultLocale: 'fr',
      },
    ],
  },
}
