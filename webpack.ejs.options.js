var path = require('path');
var _ = require('lodash')

module.exports = function options (mode) {
  var mode = mode || '';
  var opts = {
    root: __dirname,
    files: [{
      source: {
        name: 'index.ejs',
        dir: './src/templates',
      },
      target: {
        name: 'index.html',
        dir: ''
      },
      parameters: _.extend(
        require(path.resolve(__dirname, 'src/templates/index.json')),
        {'mode': mode}
      )
    }]
  };
  return opts;
}
