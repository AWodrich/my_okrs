const mix = require('laravel-mix');
const baseConfig = require('./webpack.base.conf');

/**
 * Base Laravel Mix Config Object
 * @type {{typeScript: boolean, webpackConfig: *}}
 */
const mixConfig = {
    typeScript: false,
    webpackConfig: baseConfig,
};

/**
 * Additional Production Settings ov Laravel Mix
 * @type {{purifyCss: boolean}}
 */
const productionMixSettings = {};

// merge with Production Settings
if (mix.inProduction()) {
    Object.assign(mixConfig, productionMixSettings);
}


/**
 * Laravel Mix Configurtion
 * @type {{}}
 */
module.exports = mixConfig;
