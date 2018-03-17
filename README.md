# Laravel Mix Eslint

This extension provides instant Eslint support to your Mix (v2.1 and up) builds.

## Usage

First, install the extension.

```
npm install laravel-mix-eslint --save-dev
```

Then, require it within your `webpack.mix.js` file, like so:

```js
let mix = require('laravel-mix');

require('laravel-mix-eslint');

mix
    .js('resources/assets/js/app.js', 'public/js').eslint({
        fix: false,
        cache: false,
        //...
    })
    .less('resources/assets/less/app.less', 'public/css');
```

You can pass an object with options for the [eslint-loader](https://github.com/webpack-contrib/eslint-loader) to the `mix.eslint()` function.

And you're done! Compile everything down with `npm run dev`.
