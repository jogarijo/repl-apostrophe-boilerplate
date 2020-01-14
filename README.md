# repl-apostrophe-boilerplate (based on Apostrophe Boilerplate v2.x)

## Issue description

When using `apostrophe-workflow@2.30.0`, accessing a private locale domain while not logged in incorrectly sets the
locale to the private locale, instead of switching to the default locale (when it's different) like in previous
versions. As a result, a 404 Not Found error page is shown as the anonymous user does not have the right to access the
private locale.

## Deviations from the boilerplate

This repository is based on Apostrophe Boilerplate v2.x, with the main changes described below:

- Use of `apostrophe-workflow@2.30.0`
- Use of `apostrophe@2.101.1` (peer dependency of `apostrophe-workflow@2.30.0`)
- Definition of the following locale tree:
  - `master` (private, domain: `lvh.me`, with the prefix `/master`)
    - `fr-fr` (default, domain: `fr-fr.lvh.me`, not prefixed)
- Extra middleware in `apostrophe-express` that shows the current request locale in the server console

See the commit(s) of this branch for detailed changes.

## Starting the project

First, you must ensure a MongoDB server is running locally so Apostrophe can start. A new database named
`repl-apostrophe-boilerplate` will be created.

Then initialize the project using the commands below:

```shell
npm install                                  # Install dependencies
node app.js apostrophe-users:add admin admin # Create an admin user
npm run dev                                  # Start with auto-reload
```

## How to reproduce

1. Open the environment with the domain for `master`: http://lvh.me:3000
  - You will be redirected to http://lvh.me:3000/master/ (with the extra slash at the end)
  - This page shows a 404 Not Found error page
  - In the server console, the last few lines show the value of `req.locale` for each URL hit, i.e. `master`
1. Open the environment with the domain for `fr-fr`: http://fr-fr.lvh.me:3000
  - This time your are not redirected and correctly see the homepage
  - In the server console, you'll see that `req.locale` is set to `fr` this time
