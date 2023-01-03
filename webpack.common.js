const path = require('path');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

module.exports = {
  entry: path.resolve('src', 'main.js'),
  output: {
    path: path.resolve('dist'),
    publicPath: "",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.(s[ac]|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpg|ico|gif|svg|pdf)$/,
        loader: 'file-loader',
        options: {
          name: 'img/[name].[ext]',
        },
      },
      //This rule is here to include font awesome deps as separate font
      {
         test: /\.(svg|eot|woff|woff2|ttf)$/,
         type: 'asset/resource',
         generator: {
           //publicPath: '../fonts/',
           filename: 'compiled/fonts/[hash][ext][query]'
         }
      },
      // imports/expose are here to trick bootstrap-multiselect
      {
        test: require.resolve("jquery"),
        loader: "expose-loader",
        options: {
          exposes: ["$", "jQuery"],
        },
      },
      {
        test: [
          require.resolve('bootstrap-multiselect'),
        ],
        loader: 'imports-loader',
        options: {
          wrapper: 'window',
          additionalCode: 'var define = false;'
        }
      },
    ],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /node_modules/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
  plugins: [
    new webpack.DefinePlugin({
      // this is to trick bootstrap-multiselect into not requiring knockout
      'require.specified': undefined,
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
    }),
    new WebpackManifestPlugin({
      fileName: path.resolve('data', 'manifest.json'),
      writeToFileEmit: true,
    }),
  ],
};
