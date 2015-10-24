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
    }
  ]
};

module.exports = config;
