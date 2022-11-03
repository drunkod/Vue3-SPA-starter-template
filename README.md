# paddle-frontend

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run test:e2e:dev
```

This runs the end-to-end tests against the Vite development server.
It is much faster than the production build.

But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):

```sh
npm run build
npm run test:e2e
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```


# Custom

Assumptions:
- The backend is powered by Laravel Fortify and Sanctum
- The user object is the one that can make payments (some apps may need to do this on the teams instead)
  - Using Stripe as the payment provider
  - Using Pico CSS variables for styling - update these if you're not using Pico
-

Potential tweaks to do:
- Assumes Fortify and Sanctum are being used in backend
- Surname field added to user
- Language files should be lazy loaded

# Way of working

You should almost never modify existing tests. Any modified tests will require merge approval.

If you find a bug, first write a test that will fail because of the bug. Then fix the bug and make sure the test passes.

If you want to add a new feature, write a test that will fail because of the missing feature. Then add the feature and make sure the test passes. New tests do not require approval.

<!-- Show image https://res.cloudinary.com/practicaldev/image/fetch/s--2bUj5oX1--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/26tdj40bmlnmw09fb27h.png -->

## .env.local file
Define the following:
- VITE_API_URL
  - Example: http://192.168.10.17/
- VITE_STRIPE_KEY
  - Should start with pk_


## Inputs
Inputs should use built in browser validation. If you need to add custom validation, set it using the native browser validation.