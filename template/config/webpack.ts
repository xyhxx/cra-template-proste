import WebpackBar from 'webpackbar';
import {resolve} from 'path';
import {BundleAnalyzerPlugin} from 'webpack-bundle-analyzer';

export default {
  alias: {
    '@styles': resolve(__dirname, '../', 'src/styles'),
    '@assets': resolve(__dirname, '../', 'src/assets'),
    '@routes': resolve(__dirname, '../', 'src/routes'),
    '@apis': resolve(__dirname, '../', 'src/apis'),
    '@components': resolve(__dirname, 'src/components'),
    '@hooks': resolve(__dirname, '../', 'src/hooks'),
    '@pages': resolve(__dirname, '../', 'src/pages'),
    '@stores': resolve(__dirname, '../', 'src/stores'),
    '@utils': resolve(__dirname, '../', 'src/utils'),
    '@models': resolve(__dirname, '../', 'src/models'),
  },
  plugins: [
    new WebpackBar(),

  ],
  configure(webpackConfig: any, {env}: {env: string}) {
    webpackConfig.plugins.push(
      new BundleAnalyzerPlugin({
        analyzerMode: env === 'production' ? 'static' : 'disabled',
        openAnalyzer: false,
        reportFilename: resolve(__dirname, '../analyzer/index.html'),
      }),
    );

    // webpackConfig.optimization.splitChunks = {
    //   cacheGroups: {
    //     common: {
    //       name: 'chunk-common',
    //       chunks: 'all',
    //       test: /(react|react-dom|react-dom-router)/,
    //       priority: -10,
    //     },
    //   },
    // };

    webpackConfig.cache = {
      type: 'filesystem',
      cacheDirectory: resolve(__dirname, '..', 'temp-cache'),
    };

    return webpackConfig;
  },
};
