const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.[hash].js',
  },
  module: {
      rules: [
      ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'src/index.html',
        inject: 'head',
    }),
    new CopyWebpackPlugin([
      {
        from: 'src/assets',
        to: 'assets',
      }
    ]),
  ]
};
