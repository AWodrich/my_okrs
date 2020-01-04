/* eslint global-require: 0 */
/* eslint import/no-dynamic-require: 0 */


module.exports = {
    module: {
        rules: [

            /*    // Webfonts Handler
            {
                test: /\.(woff2?|ttf|eot|svg|otf)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'fonts/[name].[ext]?[hash]',
                            publicPath: Mix.resourceRoot,
                        },
                    },
                ],

            },

            {
                test: /\.(cur|ani)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]?[hash]',
                            publicPath: Mix.resourceRoot,
                        },
                    },
                ],

             },*/
        ],
    },

    resolve: {
        // We need to register the `.ts` extension so Webpack can resolve
        // TypeScript modules without explicitly providing an extension.
        // The other extensions in this list are identical to the Mix
        // defaults.
        /* extensions: [
            '*',
            '.js',
            '.jsx',
            '.vue',
            '.ts',
            '.tsx'
         ],*/
        alias: require('./aliases.conf').webpack,
    },
};

