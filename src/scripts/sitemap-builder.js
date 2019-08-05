require("babel-register")({
  presets: ["es2015", "react"]
})

const router = require('../router/MainSwitch').default;
const Sitemap = require("react-router-sitemap").default;

(
    new Sitemap(router)
        .build('https://meddou.com')
        .save('./public/sitemap.xml')
);
