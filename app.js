const path = require('path');

module.exports = require('apostrophe')({
  shortName: 'repl-apostrophe-boilerplate',
  modules: {
    'apostrophe-templates': { viewsFolderFallback: path.join(__dirname, 'views') }
  }
});
