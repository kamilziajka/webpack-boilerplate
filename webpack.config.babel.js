'use strict';

import path from 'path';

export default {
  context: path.resolve(__dirname, 'src'),
  entry: {
    'index': './index.js'
  },
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.html$/,
        loader: 'file-loader?name=[name].[ext]'
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/,
        loader: 'file-loader?hash=sha512&digest=hex&name=[hash].[ext]'
      }
    ]
  }
};
