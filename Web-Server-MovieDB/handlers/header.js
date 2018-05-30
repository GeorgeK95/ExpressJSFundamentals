/**
 * Created by George-Lenovo on 5/27/2018.
 */

const webConstants = require('../webConstants');
const baseHandler = require('./base');

const url = require(webConstants.URL_MODULE);
const fs = require(webConstants.FS_MODULE);
const path = require(webConstants.PATH_MODULE);
const db = require(webConstants.DB_MODULE);

module.exports = (req, res) => {
    req.pathname = req.pathname || url.parse(req.url).pathname;

    let statusHeaderValue = req.headers[webConstants.STATUS_HEADER_STR];

    if (statusHeaderValue && statusHeaderValue == webConstants.STATUS_HEADER_VALUE_FULL_STR && req.method == webConstants.HTTP_GET) {
        let __parentDirname = __dirname + webConstants.PREVIOUS_EXT;

        let filePath = path.normalize(path.join(__parentDirname, webConstants.STATUS_HTML_PATH));

        fs.readFile(filePath, (err, data) => {
            if (err) {
                baseHandler.handleNotFound(req, res);
                return;
            }

            data = data.toString().replace(webConstants.REPLACE_ME_STR, db.length);

            baseHandler.handleOk(req, res, data);
        });
    } else {
        return true;
    }
};