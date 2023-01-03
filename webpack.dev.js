const path = require("path");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { merge } = require('webpack-merge');

const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "development",

  output: {
    filename: "[name].js",
  },

  devServer: {
    port: process.env.PORT || 3000,
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    open: true,
    historyApiFallback: {
      rewrites: [{from: /./, to: "404.html"}]
    }
  },

  plugins: [
    new CleanWebpackPlugin({
      verbose: true,
      cleanOnceBeforeBuildPatterns: [
        "dist/**/*.js",
        "dist/**/*.css",
        "data/manifest.json",
      ],
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
  ]
});
