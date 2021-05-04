<h1 align="center">Chat PoC App</h1>

<p align="center">
    Live app:
    <a href="https://jj-chat-app.netlify.app/"><strong>jj-chat-app.netlify.app</strong></a>
    <br>
    <br>
    UI/UX:
    <a href="https://www.figma.com/file/v87SDvtky4PVzX7QK3QZHZ/Messanger-PoC"><strong>figma.com/jj-chat-app</strong></a>
</p>

<hr/>

[![Netlify Status](https://api.netlify.com/api/v1/badges/bbc32690-8c45-4736-a6b1-85a26273a05a/deploy-status)](https://app.netlify.com/sites/jj-chat-app/deploys)
![CI](https://github.com/Jozwiaczek/chat-app/workflows/Continuous%20Integration/badge.svg)

## 🚩 Table of Contents

- [About](#-about)
- [Getting started](#-getting-started)
  - [Prerequisites](#-prerequisites)
  - [General installation](#-general-installation)
- [Packages Docs](#-packages-docs)
- [Conventional Commits](#-conventional-commits)
- [Hygen - Code generator](#-hygen-code-generator)
- [Available scripts](#-available-scripts)
- [Changelog](#-changelog)
- [License](#-license)

## 📖 About

Demo chat application

## 🎓 Getting started

### Prerequisites

- [Node.js](https://nodejs.org/en/) >= 12
- [Yarn](https://classic.yarnpkg.com/lang/en/) >=1.22

### General installation

```shell script
yarn
```

## 📦 Packages Docs

- Backend:
  - [Api](./packages/api/README.md)
- Frontend:
  - [Client](./packages/client/README.md)

## 📏 Conventional Commits

Commitlint checks if your commit messages meet the [conventional commit](https://www.conventionalcommits.org/en/v1.0.0/) format.
Also it requires package scope (https://www.npmjs.com/package/@commitlint/config-lerna-scopes).

Structure:

```git
type(package-name): general info
```

Structure with more inforamtion:

```git
type(package-name): general info

- add login panel
- add avatar
```

Example:

```git
feat(api): add comment section
```

Common types according to commitlint-config-conventional (based on the Angular convention) can be:
[conventional-commit-types](https://github.com/commitizen/conventional-commit-types/blob/master/index.json).
Header (first line) must not be longer than 100 characters.

For just validating your commit message without commiting it use terminal:

```shell
echo 'foo: bar' | commitlint
```

## 📝 Available scripts

To run script, in terminal type `yarn {script}`.

| Script              | Description                                               | Note                                       |
| ------------------- | --------------------------------------------------------- | ------------------------------------------ |
| `build`             |                                                           |                                            |
| `check`             | Runs linter, prettier, tests and ts-check in all packages |                                            |
| `heroku-postbuild`  | It runs on heroku before api build                        |                                            |
| `preinstall`        | Checks is yarn was used package manager                   | It runs automatically before every install |
| `lint`              | Checks linter rules                                       |                                            |
| `lint:fix`          | Fix linter                                                |                                            |
| `stylelint`         | Check styled-components                                   |                                            |
| `prettier`          | Checks prettier rules                                     |                                            |
| `prettier:fix`      | Fix prettier                                              |                                            |
| `prepare`           | Install husky git hooks                                   |                                            |
| `removeNodeModules` | Remove all node_modules from project (all packages)       | Works only for unix systems                |
| `sortPackageJson`   | Sort alphabetical all package.json in project             |                                            |
| `start`             | Used to run api package on heroku                         |                                            |
| `test`              | Runs tests for all packages                               |                                            |
| `type-check`        | Checks TypeScript types for all packages                  |                                            |

## License

Copyright 2021 Jakub Jóźwiak.
Licensed under the [MIT license](LICENSE).
