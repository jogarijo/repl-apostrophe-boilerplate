# REPL (based on Apostrophe Boilerplate v2.x)

## Issue description

The middleware `addGlobalToData` from `apostrophe-global` runs before `afterRequired` middlewares from other modules.

## Deviations of this REPL

This REPL is based on Apostrophe Boilerplate v2.x, with the main changes described below:

- Added a module `test-after-required-middleware` whose sole purpose is to return an `afterRequired` middleware. This middleware returns the value of `req.data.global` if it exists, and the string `not reproduced` otherwise.

See the commit(s) of this branch for detailed changes.

## Starting the REPL

First, you must ensure a MongoDB server is running locally so Apostrophe can start. A new database named
`repl-apostrophe-boilerplate` will be created.

Then initialize the REPL using the commands below:

```shell
npm install                                  # Install dependencies
node app.js apostrophe-users:add admin admin # Create an admin user
npm run dev                                  # Start with auto-reload
```

## How to reproduce

1. Start the server using `npm start` or `npm run dev`;
1. Send a request to the server:
    - With your browser: [localhost:3000](http://localhost:3000);
    - With cUrl: `curl localhost:3000`;
1. If you can reproduce the issue, the server will return the `apostrophe-global` document as JSON.
