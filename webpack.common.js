const path = require('path');
const SRC_DIR = path.join(__dirname, '/client/src');
const DIST_DIR = path.join(__dirname, '/client/dist/bundle');

module.exports = {
  resolve: {
    extensions: ['.js', '.json', '.jsx'],
  },
  entry: `${SRC_DIR}/index.js`,
  devtool: 'inline-source-map',
  output: {
    filename: 'bundle.js',
    path: DIST_DIR,
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/react', '@babel/preset-env']
          }
        }
      },
    ]
  },
};