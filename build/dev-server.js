/**
 * @file 启动开发环境
 *
 * @author xiaoqiang-zhao
 */

require('./check-versions')();

const opn = require('opn');
const express = require('express');
const webpack = require('webpack');
const webpackConfig = require('./webpack.dev.conf');

// default port where dev server listens for incoming traffic
const port = 9090;
// automatically open browser, if not set will be false
const autoOpenBrowser = true;

const app = express();
const compiler = webpack(webpackConfig);

const devMiddleware = require('webpack-dev-middleware')(compiler, {
    publicPath: webpackConfig.output.publicPath,
    quiet: true
});

const hotMiddleware = require('webpack-hot-middleware')(compiler, {
    log: false,
    heartbeat: 2000
});
// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
    compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
        hotMiddleware.publish({
            action: 'reload'
        });
        cb();
    });
});


// serve webpack bundle output
app.use(devMiddleware);

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware);

const uri = 'http://localhost:' + port;

let resolve;
const readyPromise = new Promise(resolv => {
    resolve = resolv;
});

console.log('> Starting dev server...');
devMiddleware.waitUntilValid(() => {
    console.log('> Listening at ' + uri + '\n');
    // when env is testing, don't need open it
    if (autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
        opn(uri);
    }
    resolve();
});

const server = app.listen(port);

module.exports = {
    ready: readyPromise,
    close: () => {
        server.close();
    }
};
