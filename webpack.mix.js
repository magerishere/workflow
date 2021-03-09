const mix = require("laravel-mix");

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

mix.js("resources/js/app.js", "public/js")
    .react()
    .sass("resources/sass/app.scss", "public/css");

mix.css("resources/css/assets/bootstrap.min.css", "public/css/app.css")
    .css("resources/css/assets/bootstrap-select.min.css", "public/css/app.css")
    .css("resources/css/assets/font-awesome.min.css", "public/css/app.css")
    .css("resources/css/assets/prettyPhoto.css", "public/css/app.css")
    .css("resources/css/assets/owl.carousel.min.css", "public/css/app.css")
    .css("resources/css/assets/owl.theme.default.min.css", "public/css/app.css")
    .css("resources/css/assets/animate.min.css", "public/css/app.css")
    .css("resources/css/assets/theme.css", "public/css/app.css");
