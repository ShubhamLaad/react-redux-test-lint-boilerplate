// <...babel.js> for want use latest es6 syntex in webpack file

import CleanWebpackPlugin from 'clean-webpack-plugin';
import WebpackMerge from 'webpack-merge';
import WebpackCommon from './webpack.common.babel';

module.exports = WebpackMerge(WebpackCommon, {
  devtool: 'evl',
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin(['build']),
  ],
});
