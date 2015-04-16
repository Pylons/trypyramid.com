var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var SwigWebpackPlugin = require('swig-webpack-plugin');
var node_modules_dir = path.resolve(__dirname, 'node_modules');
var templates = require('./webpack.tmpl.config').templates;

var config = {
  entry: {
    app: [
      'webpack/hot/dev-server',
      path.resolve(__dirname, 'src/main.js')
    ],
    vendors: [
      path.resolve(__dirname, 'src/vendors.js')
    ]
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].[hash].js'
  },
  module: {
    loaders: [{
      test: /\.(js|jsx)$/,
      exclude: [node_modules_dir],
      loader: 'babel'
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('style','css?sourceMap')
    }, {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract(
        'style',
        'css?sourceMap!sass?includePaths[]=' + node_modules_dir
      )
    }, {
      test: /\.(png|jpg|ico)$/,
      loader: 'file?name=img/[name].[ext]'
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
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.[hash].js')
  ]
};

if (templates) {
  templates.forEach(function(template) {
    template.mode = 'develop';
    config.plugins.push(new SwigWebpackPlugin(template));
  });
};

module.exports = config;
