# My Site

[![Netlify Status](https://api.netlify.com/api/v1/badges/1627c6e3-1105-4dd1-b455-8b57cd336249/deploy-status)](https://app.netlify.com/sites/chasbob/deploys)

- [x] Gatsby
- [x] Contentful
- [x] A lack of design or aesthetics
- ~~Design~~
- ~~Content~~

## Getting started

Install [Yarn](https://yarnpkg.com/en/docs/install) (if you haven't already).

### Get the source code and install dependencies.

```
$ git clone git@github.com:Chasbob/personal-site.git
$ cd personal-site
$ yarn install
```

### Set up of the needed content model and create a configuration file

This project comes with a Contentful setup command `yarn run setup`.

This command will ask you for a space ID, and access tokens for the Contentful Management and Delivery API and then import the needed content model into the space you define and write a configuration file (`./contentful.json`).

`yarn run setup` automates that for you but if you want to do it yourself rename `.contentful.json.sample` to `.contentful.json` and add your configuration in this file.

## Crucial Commands

This project comes with a few handy commands for linting and code fixing. The most important ones are the ones to develop and ship code. You can find the most important commands below.

### `yarn run dev`

Run in the project locally.

### `yarn run build`

Run a production build into `./public`. The result is ready to be put on any static hosting you prefer.

### `yarn run deploy`

Run a production build into `./public` and publish the site to GitHub pages.

### `yarn run clean`

Removes all dependencies, scripts and data from the installation script.

## Hooks

### [husky](https://github.com/typicode/husky) `pre-commit`

Lint staged code
