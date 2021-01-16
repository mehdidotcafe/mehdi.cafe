const { override, addBabelPreset, addBabelPlugins } = require('customize-cra')

module.exports = override(
  addBabelPreset(
    "@babel/preset-env",
    {
      "useBuiltIns": "usage",
      "corejs": 3,
      "targets": "defaults"
    }
  )
)