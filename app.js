const path = require('path');

module.exports = require('apostrophe')({
  shortName: 'repl-apostrophe-boilerplate',
  modules: {
    'apostrophe-templates': { viewsFolderFallback: path.join(__dirname, 'views') },
    'apostrophe-express': {
      middleware: [
        function showCurrentLocale (req, res, next) {
          console.log(`url: ${req.url}, locale: ${req.locale}`)
          next()
        }
      ]
    },
    'apostrophe-workflow': {
      defaultLocale: 'fr-fr',
      locales: [
        {
          name: 'master',
          label: 'Master',
          private: true,
          children: [
            {
              name: 'fr-fr',
              label: 'France',
            },
          ],
        },
      ],
      prefixes: {
        master: '/master',
      },
      hostnames: {
        master: 'lvh.me',
        'fr-fr': `fr-fr.lvh.me`,
      },
    }
  }
});
