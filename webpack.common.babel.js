// <...babel.js> for want use latest es6 syntex in webpack file

import Path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const RootPath = Path.resolve(__dirname);
const SOURCE = Path.resolve(__dirname, 'src');

const isDev = Path.basename(require.main.filename) === 'webpack-dev-server.js';

module.exports = {
  entry: {
    index: ['babel-polyfill', Path.join(SOURCE, './javascript/index.jsx')],
  },
  output: {
    path: Path.join(RootPath, '/build/'),
    filename: '[name]-[hash].min.js',
    publicPath: '/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: Path.join(SOURCE, 'index.html'),
      inject: 'body',
      filename: 'index.html',
      chunks: ['index'],
    }),
    new MiniCssExtractPlugin({
      filename: isDev ? '[name].css' : '[name].[hash].css',
      chunkFilename: isDev ? '[id].css' : '[id].[hash].css',
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.sass', '.scss', '.css'],
  },
  module: {
    rules: [
      {
        test: [/\.jsx$/, /\.js$/],
        use: ['babel-loader'],
        exclude: [/node_modules/],
      },
      {
        test: /\.json$/,
        use: 'json-loader',
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        use: 'file-loader?name=[name]-[hash].[ext]&outputPath=assets/fonts/&publicPath=/',
      },
      {
        test: /\.(jpg|png|svg|gif)$/,
        use: 'file-loader?name=[name]-[hash].[ext]&outputPath=assets/images/&publicPath=/',
      },
      {
        test: /\.css/,
        use: [
          {
            loader: isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
          },
          'css-loader',
        ],
      },
      {
        test: /\.s(a|c)ss$/,
        use: [
          {
            loader: isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              minimize: {
                safe: true,
              },
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },
};
