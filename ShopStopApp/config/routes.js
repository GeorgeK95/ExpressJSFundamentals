/**
 * Created by George-Lenovo on 6/3/2018.
 */

const webConstants = require('../webConstants');
const controllers = require(webConstants.CONTROLLERS_PATH);
const multer = require(webConstants.MULTER_STR);

const auth = require('../config/auth');

let upload = multer({dest: webConstants.CONTENT_IMAGE_PATH_2});

module.exports = (app) => {
    app.get(webConstants.HOME_URL, controllers.home.index);

    app.get(webConstants.PRODUCT_ADD_URL, auth.isAuthenticated, controllers.product.addGet);
    app.post(webConstants.PRODUCT_ADD_URL, auth.isAuthenticated,
        upload.single(webConstants.IMAGE_STR), controllers.product.addPost);

    app.get(webConstants.CATEGORY_ADD_URL, auth.isInRole('Admin'), controllers.category.addGet);
    app.post(webConstants.CATEGORY_ADD_URL, auth.isInRole('Admin'), controllers.category.addPost);

    app.get(webConstants.CATEGORY_PRODUCTS_URL, controllers.category.productsByCategory);

    app.get(webConstants.PRODUCT_EDIT_URL, auth.isAuthenticated, controllers.product.editGet);
    app.post(webConstants.PRODUCT_EDIT_URL, auth.isAuthenticated,
        upload.single(webConstants.IMAGE_STR), controllers.product.editPost);

    app.get(webConstants.PRODUCT_DELETE_URL, auth.isAuthenticated, controllers.product.deleteGet);
    app.post(webConstants.PRODUCT_DELETE_URL, auth.isAuthenticated, controllers.product.deletePost);

    app.get(webConstants.PRODUCT_BUY_URL, auth.isAuthenticated, controllers.product.buyGet);
    app.post(webConstants.PRODUCT_BUY_URL, auth.isAuthenticated, controllers.product.buyPost);

    app.get('/user/register', controllers.user.registerGet);
    app.post('/user/register', controllers.user.registerPost);

    app.get('/user/login', controllers.user.loginGet);
    app.post('/user/login', controllers.user.loginPost);

    app.get('/user/logout', auth.isAuthenticated, controllers.user.loginGet);
};