const path = require('path');
const webpack = require('webpack');

const config = {
  entry: './src/client/index.js',
  output: {
    path: path.resolve('dist'),
    filename: '[name].js',
    sourceMapFilename: '[name].js.map',
  },
  devtool: 'source-map',
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.scss$/, loaders: ['style-loader', 'css-loader', 'sass-loader'], exclude: /node_modules/ },
      { test: /\.woff(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url-loader?limit=10000&minetype=application/font-woff' },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file-loader' },
    ],
  },
  // plugins: [
  //   new webpack.optimize.UglifyJsPlugin({ sourceMap: true }),
  // ],
};

module.exports = config;
