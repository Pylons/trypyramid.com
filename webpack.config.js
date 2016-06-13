var path = require('path');
var webpack = require('webpack');
var WebpackNotifierPlugin = require('webpack-notifier');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var node_modules_dir = path.resolve(__dirname, 'node_modules');
var templates = require('./webpack.tmpl.config').templates;

var config = {
  devtool: 'eval',
  entry: {
    app: [
      'webpack-hot-middleware/client',
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
  resolve: {
    root: path.resolve(__dirname, 'src'),
    extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx'],
    modulesDirectories: ['node_modules', 'src'],
    alias: {}
  },
  module: {
    noParse: [],
    loaders: [{
      test: /\.(js|jsx)$/,
      exclude: [node_modules_dir],
      loaders: ['babel']
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('style', 'css?sourceMap')
    }, {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract(
        'style',
        'css?sourceMap!sass?sourceMap&includePaths[]=' + node_modules_dir
      )
    }, {
      test: /\.(png|jpg|ico|gif)$/,
      loader: 'file?name=img/[name].[ext]'
    }, {
      test: /\.html$/,
      loader: 'html'
    }, {
      test: /\.txt$/,
      loader: 'raw'
    }, {
      test: /\.ejs$/,
      loader: 'ejs-compiled'
    },{
      test: /\.(woff|woff2|ttf|eot|svg)(\?.*)?$/,
      loader: 'file?name=fonts/[name].[ext]'
    }, {
      test: require.resolve('jquery'),
      loader: 'expose?$!expose?jQuery'
    }, {
      test: /isotope\-|fizzy\-ui\-utils|desandro\-|masonry|outlayer|get\-size|doc\-ready|eventie|eventemitter/,
      loader: 'imports?define=>false&this=>window'
    }]
  },
  plugins: [
    new WebpackNotifierPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
    new webpack.DefinePlugin({
      __DEBUG__: true
    }),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.[hash].js'),
    new ExtractTextPlugin('[name].[hash].css', {
      allChunks: true
    })
  ],
  node: {
    net: 'empty',
    dns: 'empty'
  }
};

if (templates) {
  templates.forEach(function(template) {
    template.mode = 'develop';
    config.plugins.push(new HtmlWebpackPlugin(template));
  });
};

module.exports = config;
