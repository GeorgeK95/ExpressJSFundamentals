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

module.exports.addGet = (req, res) => {
    res.render(webConstants.ADD_CATEGORY_VIEW)
};

module.exports.addPost = (req, res) => {
    let category = req.body;
    category.creator = req.user._id;

    Category.create(category).then(() => {
        res.redirect(webConstants.HOME_URL)
    });
};

module.exports.productsByCategory = (req, res) => {
    let categoryName = req.params.category;

    Category.findOne({name: categoryName})
        .populate(webConstants.PRODUCTS_STR)
        .then((category) => {
            if (!category) {
                res.sendStatus(webConstants.STATUS_NOT_FOUND);
                return;
            }

            res.render(webConstants.CATEGORY_PRODUCTS_VIEW, {category: category})
        })

};