/**
 * Created by George-Lenovo on 5/24/2018.
 */

const webConstants = require('../webConstants');
const baseHandler = require(webConstants.BASE_HANDLER_PATH);
const db = require(webConstants.DB_PATH);

// const qs = require(webConstants.QUERY_STRING_MODULE);
const fs = require(webConstants.FS_MODULE);
const url = require(webConstants.URL_MODULE);
const path = require(webConstants.PATH_MODULE);
// const multiparty = require(webConstants.MULTIPARTY_MODULE);
const formidable = require(webConstants.FORMIDABLE_MODULE);
const shortid = require(webConstants.SHORTID_MODULE);
const mv = require(webConstants.MV_MODULE);

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
        let form = new formidable.IncomingForm();

        form.parse(req, function (err, fields, files) {
            if (err) {
                console.log(err);
                return;
            }

            let tempPath = form.openedFiles[0].path;
            let fileName = form.openedFiles[0].name;
            let ext = fileName.substr(fileName.lastIndexOf(webConstants.DOT_STR));
            let imageFolderPath = __dirname.concat([webConstants.CONTENT_IMAGE_PATH + shortid.generate() + ext]);

            mv(tempPath, imageFolderPath, function (err) {
                if (err) console.log(err);
            });

            let product = {
                name: fields.name,
                description: fields.description,
                image: imageFolderPath.substr(imageFolderPath.lastIndexOf('/../') + 3),
            };

            db.products.saveProducts(product);

            baseHandler.handleSeeOther(req, res);
        });

    } else {
        return true;
    }
};