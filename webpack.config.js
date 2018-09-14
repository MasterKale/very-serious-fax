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
    // Clean dist/ on each build
    new CleanWebpackPlugin(['dist']),
    // Inject compiled JS into <head> of HTML document
    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'src/index.html',
        inject: 'head',
    }),
    // Copy over static assets
    new CopyWebpackPlugin([
      {
        from: 'src/assets',
        to: 'assets',
      }
    ]),
  ],
  devServer: {
    clientLogLevel: 'info',
    open: true,
  },
};
