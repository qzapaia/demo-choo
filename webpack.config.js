var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './index.js',
  output: {
    path: path.join(__dirname, 'build'),
    filename:'index.js',
    publicPath: '/build/'
  },
  devtool: '#source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options:{
          presets: [
            // ['es2015',{ "modules": false }]
            ['es2015']
          ],
        }
      },
    ]
  },
};
