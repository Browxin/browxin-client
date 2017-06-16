var path = require('path');
var webpack = require('webpack');
var config = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, '/public'),
    filename: 'index.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx$|\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
};

module.exports = config;
