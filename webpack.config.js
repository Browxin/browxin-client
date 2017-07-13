var path = require('path');
var webpack = require('webpack');

var config = {
  entry: {
    bundle: './src/index.js',
    app: './src/App.js',
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
  plugins: [
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify('production')
      },
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
};

module.exports = config;

