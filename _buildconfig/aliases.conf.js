const path = require('path');


function resolveSrc(_path) {
    return path.join(__dirname, `../${ _path }`);
}


const aliases = {
    '@src': 'resources/js',
    '@helpers': 'resources/js/utils',
    '@router': 'resources/js/router', // '@layouts': 'resources/js/router/layouts',
    // '@views': 'resources/js/router/views',
    '@components': 'resources/js/components',
    '@services': 'resources/js/services',
    '@images': 'resources/images', // '@utils': 'src/utils',
    '@store': 'resources/js/store', // '@design': 'src/design/index.scss',
    '@vendor': 'resources/js/vendor',
};

module.exports = {
    webpack: {},
    jest: {},
};

for (const alias in aliases) {
    module.exports.webpack[alias] = resolveSrc(aliases[alias]);
    module.exports.jest[`^${ alias }/(.*)$`] = `<rootDir>/${ aliases[alias] }/$1`;
}
