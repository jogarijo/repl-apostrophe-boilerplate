# REPL (based on Apostrophe Boilerplate v2.x)

## Issue description

Options overrides defined by `apostrophe-override-options` are taken into account when rendering a page directly, but not when calling a route.

It may make sense in most cases, but it yields inconsistent behaviors when using modules that rely on `getOption()` outside a page render context. To keep this REPL simple, we are only demonstrating the apparent discrepancy with a single in-project module. However, a real use case with only `apostrophe-*` can be demonstrated using the following setup:

- Install `apostrophe-override-options`, `apostrophe-forms` and `apostrophe-dialog-box`;
- Add an option override for `apos.apostrophe-forms.recaptchaSite` to return a string (validity is not relevant in this case), but leave the "normal" option undefined;
- Create an `apostrophe-dialog-box` that will contain an `apostrophe-form` widget;
- Insert an `apostrophe-form` in the page content;

With this setup, the Apostrophe form that lies in the page content will retrieve the overridden value for `recaptchaSite` option, and the reCAPTCHA will be displayed. However, when opening the Dialog box that contains the form, it is lazily rendered via a call to `/modules/apostrophe-dialog-box/render/<form-id>`. In this case the form will fail to retrieve the overridden value and the reCAPTCHA won't be displayed.

## Deviations of this REPL

This REPL is based on Apostrophe Boilerplate v2.x, with the main changes described below:

- Installed latest version of `apostrophe-override-options`;
- Created the `demo-module`, which contains an option `demoOption` and declares the route `/modules/demo-module/render` that returns its value (using the `getOption()` helper);
- Configure `apostrophe-override-options` to override `demoOption`;
- Update the home template to showcase the difference in behavior between page and route rendering.

See the commit(s) of this branch for detailed changes.

## Starting the REPL

First, you must ensure a MongoDB server is running locally so Apostrophe can start. A new database named
`repl-apostrophe-boilerplate` will be created.

Then initialize the REPL using the commands below:

```shell
npm install                                  # Install dependencies
npm run dev                                  # Start with auto-reload
```

## How to reproduce

1. [Open the REPL environment](http://localhost:3000/login);
2. Compare the values for "In-page rendering" and "Route rendering".
