/**
 * Created by George-Lenovo on 5/24/2018.
 */

const webConstants = require('../webConstants');
const baseHandler = require(webConstants.BASE_HANDLER_PATH);
const fs = require(webConstants.FS_MODULE);
const url = require(webConstants.URL_MODULE);
const path = require(webConstants.PATH_MODULE);
const formidable = require(webConstants.FORMIDABLE_MODULE);

const Category = require(webConstants.CATEGORY_MODEL_PATH);

module.exports = (req, res) => {
    req.pathname = req.pathname || url.parse(req.url).pathname;

    if (req.pathname == webConstants.CATEGORY_ADD_URL && req.method == webConstants.HTTP_GET) {
        let filePath = path.normalize(path.join(__dirname, webConstants.ADD_CATEGORY_HTML_PATH));

        fs.readFile(filePath, (err, data) => {
            if (err) {
                baseHandler.handleNotFound(req, res);
                return;
            }

            baseHandler.handleOk(req, res, data);
        });
    } else if (req.pathname == webConstants.CATEGORY_ADD_URL && req.method == webConstants.HTTP_POST) {
        let form = new formidable.IncomingForm();

        form.parse(req, function (err, fields, files) {
            if (err) {
                console.log(err);
                return;
            }

            let category = {
                name: fields.name,
            };

            Category.create(category).then(() => {
                baseHandler.handleSeeOther(req, res);
            });

        });

    } else {
        return true;
    }
};