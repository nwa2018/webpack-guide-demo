const path = require('path');

const r = (...args) => path.resolve(__dirname, ...args)

module.exports = {
  entry: r('./src/index.js'),
  output: {
    filename: 'bundle.js',
    path: r('./dist')
  }
};
