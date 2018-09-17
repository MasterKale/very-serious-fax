const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    // Global JS
    main: './src/main.js',
    // Page-specific JS
    foo: './src/pages/foo/foo.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].js',
  },
  module: {
      rules: [
        {
          test: /\.html$/,
          use: {
            loader: 'html-loader',
            options: {
              attrs: [
                'img:src',
                'audio:src',
              ],
            }
          }
        },
        {
          test: /\.(jpe?g|png|mp3)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[path][name].[ext]?[hash:7]',
                context: 'src',
              },
            },
          ],
        },
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
        chunks: ['main'],
    }),
    new HtmlWebpackPlugin({
        filename: 'pages/foo/index.html',
        template: 'src/pages/foo/index.html',
        inject: 'head',
        // Specify which JS files, defined as items in `entry`, should be injected into the page
        chunks: ['foo'],
    }),
  ],
  devServer: {
    clientLogLevel: 'info',
    open: true,
  },
};
