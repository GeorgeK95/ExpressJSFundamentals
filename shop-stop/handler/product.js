/**
 * Created by George-Lenovo on 5/24/2018.
 */

const webConstants = require('../webConstants');
const baseHandler = require(webConstants.BASE_HANDLER_PATH);
const db = require(webConstants.DB_PATH);

const qs = require(webConstants.QUERY_STRING_MODULE);
const fs = require(webConstants.FS_MODULE);
const url = require(webConstants.URL_MODULE);
const path = require(webConstants.PATH_MODULE);

module.exports = (req, res) => {
    req.pathname = req.pathname || url.parse(req.url).pathname;

    if (req.pathname == webConstants.PRODUCT_URL && req.method == webConstants.HTTP_GET) {
        let filePath = path.normalize(path.join(__dirname, webConstants.PRODUCT_HTML_PATH));

        fs.readFile(filePath, (err, data) => {
            if (err) {
                baseHandler.handleNotFound(req, res);
                return;
            }

            baseHandler.handleOk(req, res, data);
        });
    } else if (req.pathname == webConstants.PRODUCT_URL && req.method == webConstants.HTTP_POST) {
        let dataStr = '';

        req.on(webConstants.EVENT_TYPE_DATA, (data) => {
            dataStr += data;
        });
        console.log(dataStr);
        req.on(webConstants.EVENT_TYPE_END, () => {
            let product = qs.parse(dataStr);
            db.products.add(product);

            baseHandler.handleFound(req, res);
        });
    } else {
        return true;
    }
};