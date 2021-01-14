const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.react('resources/owner/app.js', 'public/owner/js')
    .sass('resources/sass/app.scss', 'public/owner/css')
    .react('resources/tenant/src/index.js', 'public/tenant/js')
    .sourceMaps();