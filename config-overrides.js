const { override, addBabelPreset, addBabelPlugins } = require('customize-cra')

module.exports = override(
  addBabelPreset(
    "@babel/preset-env",
    {
      "useBuiltIns": "usage",
      "corejs": 3,
      "targets": "defaults"
    }
  ),
  addBabelPlugins(
    '@babel/plugin-proposal-nullish-coalescing-operator',
    '@babel/plugin-syntax-optional-chaining'
  )
)