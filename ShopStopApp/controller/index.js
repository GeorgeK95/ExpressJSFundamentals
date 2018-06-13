/**
 * Created by George-Lenovo on 5/24/2018.
 */

const webConstants = require('../webConstants');

const home = require(webConstants.HOME_HANDLER_PATH);
const product = require(webConstants.PRODUCT_HANDLER_PATH);
const category = require(webConstants.CATEGORY_HANDLER_PATH);
const user = require('./user');

module.exports = {
    home: home,
    product: product,
    user: user,
    category: category
};