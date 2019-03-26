const path = require('path');

module.exports = require('apostrophe')({
  shortName: 'repl-apostrophe-boilerplate',
  modules: {
    'apostrophe-templates': { viewsFolderFallback: path.join(__dirname, 'views') },

    // Enable `apostrophe-pieces-orderings-bundle`
    'apostrophe-pieces-orderings-bundle': {},

    // Test widgets
    // Note that explicitely setting `orderings` to `false` for both the modules
    // below does not prevent the maximum area loader recursion warning.
    'todo-list-item': {
      // orderings: false
    },
    'todo-list-widgets': {
      // orderings: false
    },
  }
});
