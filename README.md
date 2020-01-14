# repl-apostrophe-boilerplate (based on Apostrophe Boilerplate v2.x)

## Issue description

[...]

## Deviations from the boilerplate

This repository is based on Apostrophe Boilerplate v2.x, with the main changes described below:

- [...]

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

1. [Login to the environment](http://localhost:3000/login);
1. [...]
