const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

const r = (...args) => path.resolve(__dirname, ...args)

module.exports = merge(common, {
  devtool: 'inline-source-map',
  devServer: {
    contentBase: r('./dist')
  }
});
