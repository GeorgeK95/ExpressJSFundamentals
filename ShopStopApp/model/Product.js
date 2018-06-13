/**
 * Created by George-Lenovo on 5/31/2018.
 */

const webConstants = require('../webConstants');
const mongoose = require(webConstants.MONGOOSE);

let schema = mongoose.Schema({
    name: {type: mongoose.Schema.Types.String, required: true},
    description: {type: mongoose.Schema.Types.String},
    price: {
        type: mongoose.Schema.Types.Number,
        min: webConstants.ZERO,
        max: Number.MAX_VALUE,
        default: webConstants.ZERO
    },
    image: {type: mongoose.Schema.Types.String, required: true},
    creator: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    buyer: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    category: {type: mongoose.Schema.Types.ObjectId, ref: webConstants.CATEGORY_STR, required: true},
});

let Product = mongoose.model(webConstants.PRODUCT_STR, schema);

module.exports = Product;