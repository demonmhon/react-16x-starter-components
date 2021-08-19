# react-16x-starter-components

[![CircleCI](https://circleci.com/gh/demonmhon/react-16x-starter-components/tree/master.svg?style=svg)](https://circleci.com/gh/demonmhon/react-16x-starter-components/tree/master)
[![Maintainability](https://api.codeclimate.com/v1/badges/b056c9a999ea6975c607/maintainability)](https://codeclimate.com/github/demonmhon/react-16x-starter-components/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/b056c9a999ea6975c607/test_coverage)](https://codeclimate.com/github/demonmhon/react-16x-starter-components/test_coverage)

The react 16x starter components. The common, starter react components for most project.


## Disclaimer

This is just the react components. It should be included, used, by other full react application. Using [Storybook](https://storybook.js.org) to preview the components.

The intention for this project is to have the component's document. And provide starter component for the project that doesn't provide any ui/style guide.


## What build this project?

* **SCSS/CSS**: Many people recommend the [styled-components](https://styled-components.com/) or similar package like [emotion](https://emotion.sh/). But I decide to stick with traditional styles sheet with simple, straightforward. And it also to foundation of any styled-components like packages.
* **Webpack**: Popular bundle tools
* **Jest**: Test framework
* **ESLint & Prettier**: For good looking in the codes.


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
