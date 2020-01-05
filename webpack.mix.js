/* eslint max-len: ["error", 150] */
/* eslint-env node */

// TODO: add sass-resources-loader to get mixins and variables to JS
const mix = require('laravel-mix');
require('laravel-mix-criticalcss');
require('laravel-mix-purgecss');
require('laravel-mix-polyfill');

const tailwindcss = require('tailwindcss');
const cssvariables = require('postcss-css-variables');
const ImageminPlugin = require('imagemin-webpack-plugin').default;


// Configs
const mixConfig = require('./_buildconfig/mix.conf');
const webpackProduction = require('./_buildconfig/webpack.prod.conf');
const webpackDev = require('./_buildconfig/webpack.dev.conf');


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

/**
 * Laravel Mix + Webpack Configuration
 */
mix.options(mixConfig);

// When in Production mode, add Webpack Production features
if (mix.inProduction()) {
    mix.webpackConfig(webpackProduction);
}
else {
    mix.webpackConfig(webpackDev);
}


mix.sass('resources/sass/app.scss', 'public/css')
    .options({
        processCssUrls: false,
        postCss: [
            cssvariables(),
            tailwindcss('./tailwind.config.js')
        ],
    })
    .purgeCss({
        globs: [
            path.join(__dirname, 'node_modules/**/*.vue'),
        ],
    });

mix.js('resources/js/app.js', 'public/js')
    .polyfill({
        enabled: true,
        useBuiltIns: 'entry',
        targets: `ie 11, chrome 70, safari 11, firefox 68`
    })

    // TODO: Possibly load vendors via cdn in default template
    .extract([
        'vue',
        // 'babel-polyfill',
        'axios',
        './resources/js/utils/DOMhelpers',
        './resources/js/Appconfig.js',
        './resources/js/bootstrap.js',
    ]);


mix.copyDirectory('./resources/fonts', 'public/fonts');

if (mix.inProduction()) {
    mix.webpackConfig({
        plugins: [
            new ImageminPlugin({
                //            disable: process.env.NODE_ENV !== 'production', // Disable during development
                pngquant: {
                    quality: '95-100',
                },
                test: /\.(jpe?g|png|gif|svg)$/i,
            }),
        ],
    })
    mix.version();
}

mix.copy('resources/images', 'public/css/images', false);


/*
 |--------------------------------------------------------------------------
 | Webpack Alias Setting
 |--------------------------------------------------------------------------
 |
 | You possibly want to set Aliases for different Node modules for faster import
 |
 */
/* mix.webpackConfig({
 resolve: {
 alias: {
 "TweenLite": path.resolve('node_modules', 'gsap/src/uncompressed/TweenLite.js'),
 "TweenMax": path.resolve('node_modules', 'gsap/src/uncompressed/TweenMax.js'),
 "TimelineLite": path.resolve('node_modules', 'gsap/src/uncompressed/TimelineLite.js'),
 "TimelineMax": path.resolve('node_modules', 'gsap/src/uncompressed/TimelineMax.js'),
 "ScrollMagic": path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/ScrollMagic.js'),
 "animation.gsap": path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js'),
 "debug.addIndicators": path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js')
 }
 }
 }); */

// TODO: Vendor compile (SVGUse, Modernizr)
// TODO: implement PreCSS, PostCSS

// Full API
// mix.js(src, output);
// mix.react(src, output); <-- Identical to mix.js(), but registers React Babel compilation.
// mix.extract(vendorLibs);
// mix.sass(src, output);
// mix.standaloneSass('src', output); <-- Faster, but isolated from Webpack.
// mix.fastSass('src', output); <-- Alias for mix.standaloneSass().
// mix.less(src, output);
// mix.stylus(src, output);
// mix.postCss(src, output, [require('postcss-some-plugin')()]);
// mix.browserSync('my-site.dev');
// mix.combine(files, destination);
// mix.babel(files, destination); <-- Identical to mix.combine(), but also includes Babel compilation.
// mix.copy(from, to);
// mix.copyDirectory(fromDir, toDir);
// mix.minify(file);
// mix.sourceMaps(); // Enable sourcemaps
// mix.version(); // Enable versioning.
// mix.disableNotifications();
// mix.setPublicPath('path/to/public');
// mix.setResourceRoot('prefix/for/resource/locators');
// mix.autoload({}); <-- Will be passed to Webpack's ProvidePlugin.
// mix.webpackConfig({}); <-- Override webpack.config.js, without editing the file directly.
// mix.then(function () {}) <-- Will be triggered each time Webpack finishes building.
// mix.options({
//   extractVueStyles: false, // Extract .vue component styling to file, rather than inline.
//   processCssUrls: true, // Process/optimize relative stylesheet url()'s. Set to false, if you don't want them touched.
//   purifyCss: false, // Remove unused CSS selectors.
//   uglify: {}, // Uglify-specific options. https://webpack.github.io/docs/list-of-plugins.html#uglifyjsplugin
//   postCss: [] // Post-CSS options: https://github.com/postcss/postcss/blob/master/docs/plugins.md
// });
