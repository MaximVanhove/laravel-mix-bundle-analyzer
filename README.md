# Laravel Mix Bundle Analyzer

This extension adds the [Webpack Bundle Analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer) support to the [Laravel Mix](https://github.com/laravel-mix/laravel-mix).

## Installation

```
npm install --save-dev \
    laravel-mix \
    webpack-bundle-analyzer \
    @types/webpack-bundle-analyzer \
    laravel-mix-bundle-analyzer
```

## Usage

Your `webpack.mix.js` should look like this:

```js
const mix = require('laravel-mix');
require('laravel-mix-bundle-analyzer');

if (!mix.inProduction()) {
    mix.bundleAnalyzer();
}
```

Now, `npm run dev` will generate a report.

You might only want the report while watching (`npm run watch` or `npm run watch-poll`):

```js
const mix = require('laravel-mix');
require('laravel-mix-bundle-analyzer');

if (mix.isWatching()) {
    mix.bundleAnalyzer({
        analyzerMode: 'static',
    });
}
```

## Options

The full list of options is available at https://github.com/webpack-contrib/webpack-bundle-analyzer#options-for-plugin.

## Author

Maxim Vanhove
Web developer at [Starring Jane](https://starringjane.com)

 [![Twitter Follow](https://img.shields.io/twitter/follow/MrMaximVanhove.svg?style=social&logo=twitter&label=Follow)](https://twitter.com/MrMaximVanhove)
