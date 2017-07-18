var path = require('path');
var webpack = require('webpack');

var config = {
  entry: {
    bundle: './src/root.jsx',
    index: './src/index.js',
  },
  output: {
    filename: '[name].js',
    path: __dirname,
    library: 'BrowxinClient',
    libraryTarget: 'umd',
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    alias: {
      '~': path.join(__dirname, '/src'),
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx$|\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  devServer: {
    port: 8080,
    contentBase: __dirname,
  },
  devtool: process.env.NODE_ENV === 'development' ? 'inline-source-map' : false,
  plugins: [
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      },
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
};

if(process.env.NODE_ENV === 'development'){
  config.module.rules.push({
    test: /\.js$/,
    exclude: /(node_modules)/,
    loader: 'eslint-loader',
    enforce: 'pre',
    options: {
      fix: true,
      failOnWarning: false,
      failOnError: false,
    }
  });
}

module.exports = config;

