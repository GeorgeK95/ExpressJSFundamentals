/**
 * Created by George-Lenovo on 5/24/2018.
 */

const webConstants = require('../webConstants');

function handleOk(req, res, data) {
    handle(req, res, webConstants.STATUS_OK, data);
}

function handleNotFound(req, res) {
    handle(req, res, webConstants.STATUS_NOT_FOUND, webConstants.NOT_FOUND_STR);
}
function handleFound(req, res) {
    res.writeHead(webConstants.STATUS_FOUND, {
        'Location': '/'
    });

    res.write(webConstants.EMTPY_STR);
    res.end();
}

function handle(req, res, status, data) {
    res.writeHead(status, {
        'Content-Type': getContentType(req.pathname)
    });

    res.write(data);
    res.end();
}

function getContentType(url) {
    if (url.endsWith(webConstants.CSS_EXT)) return webConstants.CSS_CONTENT_TYPE;
    if (url.endsWith(webConstants.ICO_EXT)) return webConstants.ICO_CONTENT_TYPE;

    return webConstants.HTML_CONTENT_TYPE;
}

module.exports = {
    handleOk,
    handleFound,
    handleNotFound
};