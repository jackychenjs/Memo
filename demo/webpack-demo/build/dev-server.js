const path = require('path'),
    express = require('express'),
    opn = require('opn'),
    webpack = require('webpack'),
    webpackDevMiddleware = require('webpack-dev-middleware'),
    webpackHotMiddleware = require('webpack-hot-middleware');

const PATHS_CONFIG = require('./config/PATHS.js'),
    PORTS_CONFIG = require('./config/PORTS.js'),
    BUILD_CONFIG = require('./config/BUILD.js'),
    WEBPACK_DEV_CONFIG = require('./webpack.dev.conf.js');

/* Express DEV Server port */
var port = process.env.PORT || PORTS_CONFIG.DEV_SERVER;

/* Automatically open browser */
var autoOpenBrowser = !!BUILD_CONFIG.dev.autoOpenBrowser;

var app = express();
var compiler = webpack(WEBPACK_DEV_CONFIG);

var devMiddleware = webpackDevMiddleware(compiler, {
    publicPath: WEBPACK_DEV_CONFIG.output.publicPath,
    noInfo: true,
    quiet: true,
    stats: {
        colors: true,
        chunks: false
    }
});

var hotMiddleware = webpackHotMiddleware(compiler);

app.use(devMiddleware);
app.use(hotMiddleware);

app.use('/static', express.static(PATHS_CONFIG.STATIC));

/* Listening Log on bash */
var uri = 'http://localhost:' + port;
devMiddleware.waitUntilValid(function() {
    console.log('> Listening at ' + uri + '\n');
});

module.exports = app.listen(port, function(err) {
    if(err) {
        console.log(err);
        return ;
    }

    if(autoOpenBrowser) {
        opn(uri);
    }
});
