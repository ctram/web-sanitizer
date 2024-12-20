const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    background: './extension/src/background.ts',
    content: './extension/src/content.ts',
    popup: './extension/src/popup.ts'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: 'extension/public', to: '.' },
        { from: 'extension/manifest.json', to: '.' },
      ]
    })
  ],
  devtool: 'cheap-module-source-map'
};
