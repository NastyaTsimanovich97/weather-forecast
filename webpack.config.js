const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const NetlifyServerPushPlugin = require("netlify-push-webpack-plugin");

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
    new ExtractTextPlugin('style.css'),
    new HtmlWebpackPlugin(),
    new NetlifyServerPushPlugin({
      filename: "_headers",
      headers: [
        "  X-Frame-Options: DENY",
        "  Referrer-Policy: strict-origin-when-cross-origin",
        "/assets/*",
        "  Cache-Control: public, max-age:360000"
      ],
      include: "css"
    })
  ]
};