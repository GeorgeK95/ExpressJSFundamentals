/**
 * Created by George-Lenovo on 5/24/2018.
 */

const webConstants = require('../webConstants');
const baseHandler = require('./base');

const qs = require(webConstants.QUERY_STRING_MODULE);
const url = require(webConstants.URL_MODULE);
const fs = require(webConstants.FS_MODULE);
const path = require(webConstants.PATH_MODULE);

const Product = require(webConstants.PRODUCT_MODEL_PATH);

module.exports.index = (req, res) => {
    let queryData = req.query;
    let targetStr = queryData.query;

    Product.find({buyer: null}).populate(webConstants.CATEGORY_STR.toLowerCase()).then((result) => {
        if (targetStr) result = result.filter(p => p.name.toLowerCase().includes(targetStr));

        let data = {products: result};
        if (req.query.error) data.error = req.query.error
        else if (req.query.success) data.success = req.query.success

        res.render(webConstants.INDEX_VIEW, data);
    });
};