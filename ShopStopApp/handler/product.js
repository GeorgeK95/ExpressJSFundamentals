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

module.exports.addGet = (req, res) => {
    Category.find().then((categories) => {
        res.render(webConstants.ADD_PRODUCT_VIEW, {categories: categories});
    });
};

module.exports.addPost = (req, res) => {
    let product = req.body;
    product.image = webConstants.DOUBLE_SLASH_STR + req.file.path;

    Product.create(product).then((insertedProduct) => {
        Category.findById(product.category).then(category => {
            category.products.push(insertedProduct._id);

            category.save().then(() => {
                res.redirect(webConstants.SUCCESSFULLY_ADDED_PRODUCT_URL);
            });

            // baseHandler.handleSeeOther(req, res);
        });
    });
};

module.exports.editGet = (req, res) => {
    let prodId = req.params.id;

    Product.findById(prodId).then((product) => {
        if (!product) {
            res.sendStatus(webConstants.STATUS_NOT_FOUND);
            return;
        }

        Category.find().then((categories) => {
            res.render(webConstants.EDIT_PRODUCT_VIEW, {product: product, categories: categories});
        })
    });
};

module.exports.editPost = (req, res) => {
    let prodId = req.params.id;
    let editedProduct = req.body;

    Product.findById(prodId).then((product) => {
        if (!product) {
            res.redirect(`/?error=${enncodeURIComponent('error=Product was not found!')}`);
            return;
        }

        product.name = editedProduct.name;
        product.description = editedProduct.description;
        product.price = editedProduct.price;

        if (req.file) {
            fs.unlink(webConstants.DOT_STR + product.image, err => {
                if (err) {
                    console.log(err);
                }
            });

            product.image = webConstants.DOUBLE_SLASH_STR + req.file.path;
        }

        if (product.category.toString() !== editedProduct.category) {
            Category.findById(product.category).then((currentCategory) => {
                Category.findById(editedProduct.category).then((nextCategory) => {
                    let index = currentCategory.products.indexOf(product._id);
                    if (index >= 0) currentCategory.products.splice(index, 1);

                    currentCategory.save();

                    nextCategory.products.push(product._id);
                    nextCategory.save();

                    product.category = editedProduct.category;

                    product.save().then(() => {
                        res.redirect(webConstants.SUCCESSFULLY_EDITED_PRODUCT_URL);
                    }).catch(console.log);
                });
            });
        } else {
            product.save().then(() => {
                res.redirect(webConstants.SUCCESSFULLY_EDITED_PRODUCT_URL);
            }).catch(console.log);
        }
    })
};

module.exports.deleteGet = (req, res) => {
    let id = req.params.id;

    Product.findById(id).then((product) => {
        if (!product /*|| product.buyer !== undefined*/) {
            res.sendStatus(webConstants.STATUS_NOT_FOUND);
            return;
        }

        res.render(webConstants.DELETE_PRODUCT_VIEW, {product: product});

        /*if (product.creator.equals(req.user._id) || req.user.roles.indexOf('Admin') >= 0) {
         } else {
         res.redirect(`/?error=${encodeURIComponent('You are can only view this product!!!')}`);
         }*/
    });
};

module.exports.deletePost = (req, res) => {
    let id = req.params.id;

    Product.findById(id).then((product) => {
        /*if (!product) {
         res.redirect(`/?error=${encodeURIComponent('error=Product was not found!')}`);
         return;
         }*/

        fs.unlink(webConstants.DOT_STR + product.image, err => {
            if (err) console.log(err);
        });

        Product.remove(product).then(() => {
            res.redirect(webConstants.SUCCESSFULLY_DELETED_PRODUCT_URL);
        });

        /*if (product.creator.equals(req.user._id) || req.user.roles.indexOf('Admin') >= 0) {
         }*/
    });
};

module.exports.buyGet = (req, res) => {
    let id = req.params.id;

    Product.findById(id).then((product) => {
        if (!product) {
            res.sendStatus(webConstants.STATUS_NOT_FOUND);
            return;
        }

        res.render(webConstants.BUY_PRODUCT_VIEW, {product: product});
    });
};