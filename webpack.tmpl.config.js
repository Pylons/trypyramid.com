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
      template: 'src/templates/resources-add-ons.html',
      filename: 'resources-add-ons.html',
      uglify: true,
      data: data,
      page: 'resources-add-ons.html'
    }, {
      template: 'src/templates/resources-development-environments.html',
      filename: 'resources-development-environments.html',
      uglify: true,
      data: data,
      page: 'resources-development-environments.html'
    }, {
      template: 'src/templates/community.html',
      filename: 'community.html',
      uglify: true,
      data: data,
      page: 'community.html'
    }
  ]
};

module.exports = config;
