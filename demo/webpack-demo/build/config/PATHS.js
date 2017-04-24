var path = require('path');

/**
 *  拓展String, 新增pathJoin方法 
 */
String.prototype.pathJoin = function(target) {
    return path.join(this.toString(), target);
}

const ROOT = path.resolve(__dirname, '../..');
const SRC = ROOT.pathJoin('src');

module.exports = {
    ROOT: ROOT,
    BUILD: ROOT.pathJoin('build'),
    DIST: ROOT.pathJoin('dist'),
    SERVER: ROOT.pathJoin('server'),
    STATIC: ROOT.pathJoin('static'),

    SRC: SRC,
    VIEWS: SRC.pathJoin('views'),
    ASSETS: SRC.pathJoin('assets'),
    COMPONENT: SRC.pathJoin('components'),
    ROUTES: SRC.pathJoin('routes'),

    NODE_MODULES: ROOT.pathJoin('node_modules')
}
