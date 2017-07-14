var path = require('path');
var webpack = require('webpack');

var config = {
  entry: {
    bundle: './src/root.js',
    index: './src/index.js',
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, '/dist/'),
    library: 'BrowxinClient',
    libraryTarget: 'umd',
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
    contentBase: path.join(__dirname, '/example'),
  },
  devtool: process.env.NODE_ENV === 'development' ? 'cheap-module-eval-source-map' : false,
  plugins: [
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      },
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
};

module.exports = config;

