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
      template: 'src/templates/resources.ejs',
      filename: 'resources.html',
      uglify: true,
      context: require(path.resolve(baseDir, 'resources.json')),
      page: 'resources.html'
    }, {
      template: 'src/templates/resources-extending-pyramid.ejs',
      filename: 'resources-extending-pyramid.html',
      uglify: true,
      context: require(path.resolve(baseDir, 'resources-extending-pyramid.json')),
      page: 'resources-extending-pyramid.html'
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
    }
  ]
};

module.exports = config;
