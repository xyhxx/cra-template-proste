import webpackConfig from './config/webpack';
import babelConfig from './config/babel';
import styleConfig from './config/style';

import SpeedMeasurePlugin from 'speed-measure-webpack-plugin';

const {wrap} = new SpeedMeasurePlugin();

const IS_DEV = process.env.NODE_ENV === 'development';

export default {
  style: styleConfig,
  webpack: IS_DEV ? wrap(webpackConfig) : webpackConfig,
  babel: babelConfig,
};
