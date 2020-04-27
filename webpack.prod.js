const merge = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "production",

  output: {
    filename: "[name].[hash].js",
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].[hash].css",
    }),
  ],
});
