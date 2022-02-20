const CracoAlias = require('craco-alias');

module.exports = {
  style: {
    modules: {
      localIdentName: '[local]-[hash:base64:5]',
    },
  },
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: 'tsconfig',
        baseUrl: './src',
        tsConfigPath: './tsconfig.paths.json',
      },
    },
  ],
  babel: {
    loaderOptions: {
      babelrc: true,
    },
  },
};
