const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = merge(common, {
  mode: "production",
  watchOptions: {
    ignored: /node_modules/,
  },
  optimization: {
      minimize: true,
      usedExports: true,
      minimizer: [new TerserPlugin()],
  },
});