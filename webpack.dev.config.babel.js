'use strict';

import Path from 'path';
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import WebpackMerge from 'webpack-merge';
import WebpackCommon from './webpack.common.babel';

module.exports = WebpackMerge(WebpackCommon, {
  devtool: 'source-map', //open file original source in browser
  mode: 'development',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    disableHostCheck: true,
    host: 'localhost',
    port: 3030,
    open: true,
    hot: true,
    inline: true,
    compress: true,
    historyApiFallback: true,
    disableHostCheck: true,
  }
});