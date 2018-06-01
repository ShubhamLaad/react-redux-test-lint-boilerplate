'use strict';

import Path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const RootPath = Path.join(__dirname);
const SOURCE = Path.join(__dirname, 'src');

module.exports = {
  devtool: 'source-map', //open file original source in browser
  mode: 'development',
  entry: {
    index: Path.join(RootPath, 'src/javascript/index.js'),
  },
  output: {
    path: Path.join(RootPath, '/build/'),
    filename: '[name].js',
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: Path.join(SOURCE, 'index.html'),
      inject: 'body',
      filename: 'index.html',
      chunks: ['index']
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.sass', '.scss', '.css'],
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.s(a|c)ss$/,
        use: [
          'style-loader', // creates style nodes from JS strings
          'css-loader', // translates CSS into CommonJS
          'sass-loader' // compiles Sass to CSS]
        ]
      }
    ]
  },
  devServer: {
    disableHostCheck: true,
    host: 'localhost',
    port: 3000,
    open: true,
    hot: true,
    inline: true,
  }
};