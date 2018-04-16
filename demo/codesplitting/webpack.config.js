const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const r = (...args) => path.resolve(__dirname, ...args)

module.exports = {
  entry: {
    app: r('./src/index.js'),
    another: r('./src/another-module.js'),
  },
  output: {
    filename: '[name].bundle.js',
    path: r('./dist')
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Code Splitting'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common'
    })
  ]
};
