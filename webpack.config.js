const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

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
    // Add additional HtmlWebpackPlugin entries to add additional HTML pages
    new HtmlWebpackPlugin({
      // Input
      template: 'src/index.html',
      // Output (within dist/)
      filename: 'index.html',
      // Inject compiled JS into <head>
      inject: 'head',
      // Specify which JS files, by key in `entry` above, should be injected into the page
      chunks: ['main'],
    }),
    new HtmlWebpackPlugin({
      filename: 'pages/foo/index.html',
      template: 'src/pages/foo/index.html',
      inject: 'head',
      chunks: ['foo'],
    }),
  ],
  devServer: {
    clientLogLevel: 'info',
    open: true,
  },
};
