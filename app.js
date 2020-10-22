const path = require('path');

module.exports = require('apostrophe')({
  shortName: 'repl-apostrophe-boilerplate',
  modules: {
    'apostrophe-templates': { viewsFolderFallback: path.join(__dirname, 'views') },
    'apostrophe-override-options': {},

    'apostrophe-custom-pages': {
      overrideOptions: {
        fixed: {
          'apos.demo-module.demoOption': (req, options, path, val) => {
            return 'overridden option value'
          }
        }
      },
    },

    'demo-module': {
      demoOption: 'original option value',

      construct (self, options) {
        self.route('get', 'render', (req, res) => {
          res.send(self.getOption(req, 'demoOption'))
        })
      }
    }
  }
});
