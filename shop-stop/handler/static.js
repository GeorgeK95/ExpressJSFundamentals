
/**
 * Created by George-Lenovo on 5/24/2018.
 */

const webConstants = require('../webConstants');
const baseHandler = require('./base');

const url = require(webConstants.URL_MODULE);
const fs = require(webConstants.FS_MODULE);
const path = require(webConstants.PATH_MODULE);

module.exports = (req, res) => {
    req.pathname = req.pathname || url.parse(req.url).pathname;

    if (req.pathname.startsWith(webConstants.CONTENT_URL) && req.method == webConstants.HTTP_GET) {
        let __parentDirname =__dirname + webConstants.PREVIOUS_EXT;

        let filePath = path.normalize(path.join(__parentDirname, `${req.pathname}`));
        fs.readFile(filePath, (err, data) => {
            if (err) {
                baseHandler.handleNotFound(req, res);
                return;
            }

            baseHandler.handleOk(req, res, data);
        });
    } else {
        return true;
    }
};