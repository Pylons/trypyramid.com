var path = require('path');

var baseDir = __dirname + '/src/templates';

var config = {
  templates: [
    {
      template: 'src/templates/index.ejs',
      filename: 'index.html',
      uglify: true,
      context: require(path.resolve(baseDir, 'index.json')),
      page: 'index.html'
    }, {
      template: 'src/templates/colors.ejs',
      filename: 'colors.html',
      uglify: true,
      context: require(path.resolve(baseDir, 'colors.json')),
      page: 'colors.html'
    }, {
      template: 'src/templates/documentation.ejs',
      filename: 'documentation.html',
      uglify: true,
      context: require(path.resolve(baseDir, 'documentation.json')),
      page: 'documentation.html'
    }, {
      template: 'src/templates/extending-pyramid.ejs',
      filename: 'extending-pyramid.html',
      uglify: true,
      context: require(path.resolve(baseDir, 'extending-pyramid.json')),
      page: 'extending-pyramid.html'
    }, {
      template: 'src/templates/community.ejs',
      filename: 'community.html',
      uglify: true,
      context: require(path.resolve(baseDir, 'community.json')),
      page: 'community.html'
    }, {
      template: 'src/templates/community-powered-by-pyramid.ejs',
      filename: 'community-powered-by-pyramid.html',
      uglify: true,
      context: require(path.resolve(baseDir, 'community-powered-by-pyramid.json')),
      page: 'community-powered-by-pyramid.html'
    }, {
      template: 'src/templates/community-sponsors.ejs',
      filename: 'community-sponsors.html',
      uglify: true,
      context: require(path.resolve(baseDir, 'community-sponsors.json')),
      page: 'community-sponsors.html'
    }, {
      template: 'src/templates/community-events.ejs',
      filename: 'community-events.html',
      uglify: true,
      context: require(path.resolve(baseDir, 'community-events.json')),
      page: 'community-events.html'
    }, {
      template: 'src/templates/community-feeds.ejs',
      filename: 'community-feeds.html',
      uglify: true,
      context: require(path.resolve(baseDir, 'community-feeds.json')),
      page: 'community-feeds.html'
    }, {
      template: 'src/templates/community-artwork.ejs',
      filename: 'community-artwork.html',
      uglify: true,
      context: require(path.resolve(baseDir, 'community-artwork.json')),
      page: 'community-artwork.html'
    }
  ]
};

module.exports = config;
