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
const multiparty = require(webConstants.MULTIPARTY_MODULE);
const shortid = require(webConstants.SHORTID_MODULE);

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
        let product;

        let form = new multiparty.Form();
        form.parse(req);

        form.on(webConstants.EVENT_TYPE_PART, (part) => {
            if (part.filename) {
                let dataStr = '';

                part.setEncoding(webConstants.BINARY_STR);

                part.on(webConstants.EVENT_TYPE_DATA, (data) => {
                    dataStr += data;
                });

                part.on(webConstants.EVENT_TYPE_END, () => {
                    let fileName = shortid.generate();
                    let filePath = __dirname.concat(fileName);

                    product.image = filePath;

                    fs.writeFile(`.${filePath}`, dataStr, {encoding: webConstants.ASCII_STR}, (err) = {
                        if(err) {
                            console.log(err);
                            return;
                        }
                    });
                });
            } else {
                part.setEncoding(webConstants.ENCODING_UTF_8);

                let field = webConstants.EMTPY_STR;

                part.on(webConstants.EVENT_TYPE_DATA, (data) => {
                    field += data;
                });

                part.on(webConstants.EVENT_TYPE_END, () => {
                    product[part.name] = field;
                });
            }
        });

        form.on(webConstants.EVENT_TYPE_CLOSE, () => {
            db.products.add(product);
            baseHandler.handleFound(req, res);
        });

        /*let dataStr = '';

         req.on(webConstants.EVENT_TYPE_DATA, (data) => {
         dataStr += data;
         });

         req.on(webConstants.EVENT_TYPE_END, () => {
         let product = qs.parse(dataStr);
         db.products.add(product);

         baseHandler.handleFound(req, res);
         });*/
    } else {
        return true;
    }
};