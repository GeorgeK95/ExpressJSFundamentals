/**
 * Created by George-Lenovo on 5/24/2018.
 */

const webConstants = require('../webConstants');
const baseHandler = require('./base');

const db = require(webConstants.DB_PATH);

const qs = require(webConstants.QUERY_STRING_MODULE);
const url = require(webConstants.URL_MODULE);
const fs = require(webConstants.FS_MODULE);
const path = require(webConstants.PATH_MODULE);

module.exports = (req, res) => {
    req.pathname = req.pathname || url.parse(req.url).pathname;

    if (req.pathname == webConstants.HOME_URL && req.method == webConstants.HTTP_GET) {
        let filePath = path.normalize(path.join(__dirname, webConstants.INDEX_HTML_PATH));

        fs.readFile(filePath, (err, data) => {
            if (err) {
                baseHandler.handleNotFound(req, res);
                return;
            }

            let queryData = qs.parse(url.parse(req.url).query);
            let products = db.products.getAll;
            let targetStr = queryData.query;

            if (targetStr) {
                products = products.filter(p => p.name.includes(targetStr));
            }

            let content = '';

            for (let product of products) {
                content +=
                    `<div class ="product-card"> 
                      <img class="product-img" src="${product.image}">
                      <h2>${product.name}</h2>
                      <p>${product.description}</p>
                     </div>`;
            }

            let html = data.toString().replace(webConstants.CONTENT_STR, content);
            baseHandler.handleOk(req, res, html);
        });
    } else {
        return true;
    }
};