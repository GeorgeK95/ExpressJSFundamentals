/**
 * Created by George-Lenovo on 5/24/2018.
 */

const webConstants = require('../webConstants');

const homeHandler = require(webConstants.HOME_HANDLER_PATH);
const productHandler = require(webConstants.PRODUCT_HANDLER_PATH);
const categoryHandler = require(webConstants.CATEGORY_HANDLER_PATH);

module.exports = {
    home: homeHandler,
    product: productHandler,
    category: categoryHandler
};