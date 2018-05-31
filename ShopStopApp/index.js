/**
 * Created by George-Lenovo on 5/24/2018.
 */

const webConstants = require('./webConstants');
const http = require(webConstants.HTTP);
const handlers = require(webConstants.INDEX_HANDLER_PATH);

const env = process.env.NODE_ENV || webConstants.DEVELOPMENT_STR;
const config = require(webConstants.DB_CONFIG_PATH);
const db = require(webConstants.DB_PATH);

db(config[env]);

http.createServer((req, res) => {
    for (let handler of handlers) {
        if (!handler(req, res)) break;
    }

}).listen(webConstants.SERVER_PORT);