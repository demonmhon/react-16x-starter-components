# react-16x-starter-components

[![CircleCI](https://circleci.com/gh/demonmhon/react-16x-starter-components/tree/master.svg?style=svg)](https://circleci.com/gh/demonmhon/react-16x-starter-components/tree/master)

The react 16x starter components. The common, starter react components for most project.


## Disclaimer

This is just the react components. It should be included, used, by other full react application. Using [React Styleguidist](https://react-styleguidist.js.org/) tp preview the components.


## Getting started

For component development.

Install dependencies

```bash
$ npm install
```

Start the style guide dev server. Then open the web browser to view the components guide.

```bash
$ npm start
```

You'll only the `.env` for `docker-compose` only. To do that, set your environment variables in `.env.development`, update all variables with correct values

```bash
$ cp .env.example .env.development
```

> `.env.development` is for local development, it ignored by git.
> 

## Usages

As mentioned, copy the `src/components` and `src/scss` to full react application project might be the best solution for now. Work fine with [demonmhon/react-16x-starter](https://github.com/demonmhon/react-16x-starter).


## Scripts

| Script | Description |
|-|-|
| `start` | Alias of `start:dev` |
| `start:dev` | Start a style guide dev server |
| `test` | Jest and execute all the tests |
| `test:coverage` | Generate a coverage report |
| `test:watch` | Run all the tests and keep on watch mode |
| `build` | Build a production HTML version |
| `build:docker` | Build docker image |


## License

[MIT](LICENSE.md)
