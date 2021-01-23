const { override, addBabelPreset } = require('customize-cra');

module.exports = override(
  addBabelPreset(
    '@babel/preset-env',
    '@babel/preset-react',
    '@babel/plugin-proposal-optional-chaining',
    {
      useBuiltIns: 'usage',
      corejs: 3,
      targets: 'defaults',
    },
  ),
)
