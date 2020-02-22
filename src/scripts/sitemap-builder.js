require('babel-register')({
  presets: ['es2015', 'react']
})

const Sitemap = require('react-router-sitemap').default
const router = require('../router/MainSwitch').default

new Sitemap(router)
    .build('https://meddou.com')
    .save('./public/sitemap.xml')
