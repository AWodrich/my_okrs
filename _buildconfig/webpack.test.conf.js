/* eslint max-len: ["error", 100] */

const merge = require('webpack-merge');
// const baseConfig = require('./webpack.base.conf');


const webpackConfig = merge({}, {
    node: {
        fs: 'empty',
    },
    resolve: {
        extensions: [
            '*',
            '.js',
            '.jsx',
            '.vue'
        ],

        alias: {
            vue$: 'vue/dist/vue.esm.js',
        },
    },
});

// Remove App Entrypoint for Testing
delete webpackConfig.entry;


// Use only, when merge config with an base config, that uses
// Common Chunks like vue extract files
// Remove Common Chunks Plugin, because it interferes with karma
// const commonsChunkPluginIndex = webpackConfig.plugins.findIndex((plugin) => plugin.chunkNames);
// webpackConfig.plugins.splice(commonsChunkPluginIndex, 1);

module.exports = webpackConfig;
