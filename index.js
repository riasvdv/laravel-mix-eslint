let mix = require('laravel-mix');

class Eslint {
    dependencies() {
        this.requiresReload = `
            Dependencies have been installed. Please run "npm run dev" again.
        `;

        return ['eslint', 'eslint-loader', 'eslint-plugin-vue'];
    }

    register(options = {}) {
        this.options = options;
    }

    webpackRules() {
        return {
            enforce: "pre",
            test: /\.(js|vue)$/,
            exclude: /node_modules/,
            loader: "eslint-loader",
            options: this.options,
        };
    }
}

mix.extend('eslint', new Eslint());
