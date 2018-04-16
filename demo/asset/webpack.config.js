const path = require('path');

const r = (...args) => path.resolve(__dirname, ...args)

module.exports = {
  entry: r('./src/index.js'),
  output: {
    filename: 'bundle.js',
    path: r('./dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  }
};
