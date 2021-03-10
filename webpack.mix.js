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

mix.css("resources/assets/css/bootstrap.rtl.min.css", "public/css/main.css")
    .css("resources/assets/css/animate.min.css", "public/css/main.css")
    .css("resources/assets/css/magnific-popup.css", "public/css/main.css")
    .css("resources/assets/css/owl.carousel.min.css", "public/css/main.css")
    .css(
        "resources/assets/css/owl.theme.default.min.css",
        "public/css/main.css"
    )
    .css("resources/assets/css/meanmenu.css", "public/css/main.css")
    // .css("resources/assets/css/style.css", "public/css/main.css")
    .css("resources/assets/css/responsive.css", "public/css/main.css")
    .css("resources/assets/css/rtl.css", "public/css/main.css");

mix.js("resources/assets/js/jquery-3.5.1.slim.min.js", "public/js/main.js")
    .js("resources/assets/js/bootstrap.bundle.js", "public/js/main.js")
    .js("resources/assets/js/jquery.magnific-popup.min.js", "public/js/main.js")
    .js("resources/assets/js/owl.carousel.min.js", "public/js/main.js")
    .js("resources/assets/js/jquery.nice-select.min.js", "public/js/main.js")
    .js("resources/assets/js/wow.min.js", "public/js/main.js")
    .js("resources/assets/js/meanmenu.js", "public/js/main.js")
    .js("resources/assets/js/jquery.ajaxchimp.min.js", "public/js/main.js")
    .js("resources/assets/js/form-validator.min.js", "public/js/main.js")
    .js("resources/assets/js/contact-form-script.js", "public/js/main.js")
    .js("resources/assets/js/mixitup.min.js", "public/js/main.js")
    .js("resources/assets/js/custom.js", "public/js/main.js");
