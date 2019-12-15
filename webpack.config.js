const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './fancy-weather/src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      }, {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ["eslint-loader"]
      },
      {
        test: /\.(jpg|png|svg)$/,
        loader: 'file-loader',
        options: {
            name: 'images/[name].[ext]'
                 },
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('style.css')
  ]
};