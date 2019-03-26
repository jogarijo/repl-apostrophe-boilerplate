# REPL (based on Apostrophe Boilerplate v2.x)

## Issue description

Several maximum area loader recursion warnings for the same document appear when the two conditions below are met:

- The module `apostrophe-pieces-orderings-bundle` is enabled;
- A module extending `apostrophe-pieces-widgets` is saved on the global object (`data.global` in the templates).

There is no need for the orderings to be configured in for the module extending `apostrophe-pieces-widgets` for the
warnings to appear. Furthermore, explicitely disabling orderings for the module does not prevent this behavior.

## Deviations of this REPL

This REPL is based on Apostrophe Boilerplate v2.x, with the main changes described below:

- Added `apostrophe-pieces-orderings-bundle@2.0.3` to *package.json*
- Enabled `apostrophe-pieces-orderings-bundle`
- Created an `apostrophe-pieces` module: `todo-list-item`
- Created an `apostrophe-pieces-widgets` module: `todo-list-widgets`
- Changed the main template to include a `todo-list-widgets` singleton in `data.global`

See the commit(s) of this branch for detailed changes

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
1. Click on the **Add Todo List** button;
1. Save the *Todo List* as is;
1. Reload the page;
1. The warning below appears multiple times in the server console:
  ```
  WARNING: reached maximum area loader recursion level. Doc _id is cjtphdw1i0003xi14e9u0igi4. Are you using projections for all joins?
  ```
