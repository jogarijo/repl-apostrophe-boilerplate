# REPL (based on Apostrophe Boilerplate v2.x)

## Issue description

[...]

## Deviations of this REPL

This REPL is based on Apostrophe Boilerplate v2.x, with the main changes described below:

- [...]

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

1. [Login to the REPL environment](http://localhost:3000/login);
1. [...]
