const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src',
  output: {
    filename: './bundle.js',
    path: path.join(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss'],
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader?importLoader=1&modules&localIdentName=[path]___[name]__[local]___[hash:base64:5]', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
    }),
  ],
};
