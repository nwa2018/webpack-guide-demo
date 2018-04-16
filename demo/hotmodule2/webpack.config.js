const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

const r = (...args) => path.resolve(__dirname, ...args)

module.exports = {
  entry: {
    app: r('./src/index.js')
  },
  devtool: 'inline-source-map',
  output: {
    filename: '[name].bundle.js',
    path: r('./dist')
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Output Management'
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
};
