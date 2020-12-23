let mix = require('laravel-mix')
const ESLintPlugin = require('eslint-webpack-plugin')

class Eslint {
  dependencies() {
    this.requiresReload =
      'Dependencies have been installed. Please run "npm run dev" again.'

    return ['eslint', 'eslint-webpack-plugin', 'eslint-plugin-vue']
  }

  register(options = {}) {
    this.options = options
  }

  webpackPlugins() {
    return [
      new ESLintPlugin({
        extensions: ['js', 'vue'],
        fix: true,
        ...this.options
      })
    ]
  }
}

mix.extend('eslint', new Eslint())
