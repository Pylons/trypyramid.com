var path = require('path');
var webpack = require('webpack');
var SwigWebpackPlugin = require('swig-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var StatsWriterPlugin = require("webpack-stats-plugin").StatsWriterPlugin;
var node_modules_dir = path.resolve(__dirname, 'node_modules');
var templates = require('./webpack.tmpl.config').templates;

var config = {
  cache: true,
  entry: {
    app: path.resolve(__dirname, 'src/main.js'),
    vendors: [
      path.resolve(__dirname, 'src/vendors.js')
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].js'
  },
  module: {
    loaders: [{
      test: /\.(js|jsx)$/,
      exclude: [node_modules_dir],
      loader: 'babel'
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('style', 'css?minimize')
    }, {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract(
        'style',
        'css!sass?includePaths[]=' + node_modules_dir
      )
    }, {
      test: /\.(png|jpg)$/,
      loader: 'url?limit=25000!file?name=img/[name].[ext]'
    }, {
      test: /\.html$/,
      loader: 'html'
    }, {
      test: /\.txt$/,
      loader: 'raw'
    }, {
      test: /\.(woff|woff2|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'file?name=fonts/[name].[ext]'
    }]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
    new ExtractTextPlugin('[name].[hash].css', {
      allChunks: true
    }),
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.[hash].js'),
    new webpack.optimize.UglifyJsPlugin({compress: true}),
    new webpack.optimize.DedupePlugin(),
    new StatsWriterPlugin({
      path: path.join(__dirname, 'dist'),
      filename: 'stats.json',
      fields: ['hash', 'assetsByChunkName']
    }),
    new webpack.NoErrorsPlugin()
  ]
};

if (templates) {
  templates.forEach(function(template) {
    config.plugins.push(new SwigWebpackPlugin(template));
  });
};

module.exports = config;
