const path = require('path');
const PATHS_CONFIG = require('./PATHS.js');

module.exports = {
    build: {
        env: {NODE_ENV: '"production"'},
        index: path.join(PATHS_CONFIG.DIST, 'index.html'),
        assetsRoot: PATHS_CONFIG.DIST,
        assetsSubDirectory: 'static',
        productionSourceMap: true
    },
    dev: {
        env: {NODE_ENV: '"development"'},
        assetsSubDirectory: 'static',
        autoOpenBrowser: true,
        cssSourceMap: false
    }
};