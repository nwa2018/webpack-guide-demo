const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const r = (...args) => path.resolve(__dirname, ...args)

module.exports = env => {
  // console.log(env, process.env.NODE_ENV)
  return {
    entry: {
      app: r('./src/index.js'),
      print: r('./src/print.js'),
    },
    output: {
      filename: '[name].bundle.js',
      path: r('./dist')
    },
    plugins: [
      new CleanWebpackPlugin(['dist']),
      new HtmlWebpackPlugin({
        title: 'Output Management'
      })
    ]
  }
}
