const path = require('path');

module.exports = require('apostrophe')({
  shortName: 'repl-apostrophe-boilerplate',
  modules: {
    'apostrophe-templates': { viewsFolderFallback: path.join(__dirname, 'views') },

    'test-after-required-middleware': {
      afterConstruct (self) {
        self.expressMiddleware = {
          when: 'afterRequired',
          middleware (req, res, next) {
            if (req.data && req.data.global) {
              res.json(req.data.global)
            } else {
              res.send('bug not reproduced')
            }
          }
        }
      }
    }
  }
});
