var path = require('path');
var webpack = require('webpack');

var config = {
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    path: path.join(__dirname, '/'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  devServer: {
    port: 8080,
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify('production')
      },
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
};

module.exports = config;

