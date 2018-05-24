/**
 * Created by George-Lenovo on 5/24/2018.
 */

const webConstants = require('./webConstants');
const http = require(webConstants.HTTP);
const handlers = require(webConstants.INDEX_HANDLER_PATH);

http.createServer((req, res) => {
    for (let handler of handlers) {
        if (!handler(req, res)) break;
    }

}).listen(webConstants.SERVER_PORT);