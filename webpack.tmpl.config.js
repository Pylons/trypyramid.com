var path = require('path');
var data = require(path.resolve(__dirname, 'src/templates/data.json'));

var config = {
  templates: [
    {
      template: 'src/templates/index.html',
      filename: 'index.html',
      uglify: true,
      data: data,
      page: 'index.html'
    }, {
      template: 'src/templates/colors.html',
      filename: 'colors.html',
      uglify: true,
      data: data,
      page: 'colors.html'
    }, {
      template: 'src/templates/resources.html',
      filename: 'resources.html',
      uglify: true,
      data: data,
      page: 'resources.html'
    }, {
      template: 'src/templates/resources-extending-pyramid.html',
      filename: 'resources-extending-pyramid.html',
      uglify: true,
      data: data,
      page: 'resources-extending-pyramid.html'
    }
  ]
};

module.exports = config;
