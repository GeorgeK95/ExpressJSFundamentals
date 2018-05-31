/**
 * Created by George-Lenovo on 5/24/2018.
 */

const webConstants = require('../webConstants');
const baseHandler = require(webConstants.BASE_HANDLER_PATH);
const fs = require(webConstants.FS_MODULE);
const url = require(webConstants.URL_MODULE);
const path = require(webConstants.PATH_MODULE);
const formidable = require(webConstants.FORMIDABLE_MODULE);
const shortid = require(webConstants.SHORTID_MODULE);
const mv = require(webConstants.MV_MODULE);

const Product = require(webConstants.PRODUCT_MODEL_PATH);
const Category = require(webConstants.CATEGORY_MODEL_PATH);

module.exports = (req, res) => {
    req.pathname = req.pathname || url.parse(req.url).pathname;

    if (req.pathname == webConstants.PRODUCT_URL && req.method == webConstants.HTTP_GET) {
        let filePath = path.normalize(path.join(__dirname, webConstants.PRODUCT_HTML_PATH));

        fs.readFile(filePath, (err, data) => {
            if (err) {
                baseHandler.handleNotFound(req, res);
                return;
            }

            Category.find().then((categories) => {
                let replacement = webConstants.EMPTY_STR;

                for (let category of categories) {
                    replacement += `<option value="${category._id}">${category.name}</option>`;
                }

                let htmlContent = data.toString().replace(webConstants.CONTENT_STR, replacement);
                baseHandler.handleOk(req, res, htmlContent);
            });

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
                price: fields.price,
                image: imageFolderPath.substr(imageFolderPath.lastIndexOf('/../') + 3),
                category: fields.category
            };

            Product.create(product).then((insertedProduct) => {
                Category.findById(product.category).then(category => {
                    category.products.push(insertedProduct._id);
                    category.save();

                    baseHandler.handleSeeOther(req, res);
                });
            });

        });

    } else {
        return true;
    }
};