'use strict'
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const autoprefixer = require('autoprefixer')

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: [
    './vendor.ts',
    './main.ts'
  ],
  output: {
    path: 'dist',
    filename: 'app.bundle.js'
  },
  devtool: 'inline-sourcemap',
  module: {
    loaders: [{
      test: /\.ts$/,
      exclude: /node_modules/,
      loader: 'ts'
    }]
  },
  resolve: {
    extensions: ['', '.js', '.ts']
  },
  devServer: {
    contentBase: './dist',
    hot: true,
    inline: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: 'index.html'
    })
  ],
  postcss: () => [autoprefixer]
}
