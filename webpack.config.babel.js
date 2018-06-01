//<...babel.js> for want use latest es6 syntex in webpack file
'use strict';

import Path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import CleanWebpackPlugin from "clean-webpack-plugin";

const RootPath = Path.join(__dirname);
const BUILD = Path.join(__dirname, 'build');
const SOURCE = Path.join(__dirname, 'src');

module.exports = {
  entry: {
    index: Path.join(RootPath, 'src/assets/javascript/index.js'),
  },
  output: {
    path: Path.join(RootPath, '/build/'),
    filename: '[name]-[hash].min.js',
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: Path.join(SOURCE, 'index.html'),
      inject: 'body',
      filename: 'index.html',
      chunks: ['index']
    }),
    new ExtractTextPlugin({
      filename: 'styles/style.css',
      allChunks: true,
      disable: true,
    }),
    new CleanWebpackPlugin(['build']),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.sass', '.scss', '.css'],
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        exclude: ['node_modules'],
        use: [{ loader: 'babel-loader' }],
      },
      {
        test: /\.css/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader",
          publicPath: "/"
        })
      },
      {
        test: /\.s(a|c)ss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            {
              loader: "css-loader",
              options: {
                minimize: true
              }
            },
            "sass-loader"
          ],
          publicPath: "/"
        })
      },
    ]
  },
};
