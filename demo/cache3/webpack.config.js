const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const r = (...args) => path.resolve(__dirname, ...args)

module.exports = {
  entry: {
    index: r('./src/index.js'),
    vendor: [
      'lodash'
    ]
  },
  output: {
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].js',
    path: r('./dist')
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new webpack.HashedModuleIdsPlugin(),
    new HtmlWebpackPlugin({
      title: 'Caching'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest'
    })
  ]
};
