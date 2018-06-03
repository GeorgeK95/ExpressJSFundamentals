/**
 * Created by George-Lenovo on 6/3/2018.
 */

const webConstants = require('../webConstants');
const handlers = require(webConstants.HANDLERS_PATH);
const multer = require(webConstants.MULTER_STR);

let upload = multer({dest: webConstants.CONTENT_IMAGE_PATH_2});

module.exports = (app) => {
    app.get(webConstants.HOME_URL, handlers.home.index);

    app.get(webConstants.PRODUCT_ADD_URL, handlers.product.addGet);
    app.post(webConstants.PRODUCT_ADD_URL, upload.single(webConstants.IMAGE_STR), handlers.product.addPost);

    app.get(webConstants.CATEGORY_ADD_URL, handlers.category.addGet);
    app.post(webConstants.CATEGORY_ADD_URL, handlers.category.addPost);

    app.get(webConstants.CATEGORY_PRODUCTS_URL, handlers.category.productsByCategory);

    app.get(webConstants.PRODUCT_EDIT_URL, handlers.product.editGet);
    app.post(webConstants.PRODUCT_EDIT_URL, upload.single(webConstants.IMAGE_STR), handlers.product.editPost);

    app.get(webConstants.PRODUCT_DELETE_URL, handlers.product.deleteGet);
    app.post(webConstants.PRODUCT_DELETE_URL, handlers.product.deletePost);

    app.get(webConstants.PRODUCT_BUY_URL, handlers.product.buyGet);
};