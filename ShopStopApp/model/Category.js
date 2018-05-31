/**
 * Created by George-Lenovo on 5/31/2018.
 */

const webConstants = require('../webConstants');
const mongoose = require(webConstants.MONGOOSE);

let schema = mongoose.Schema({
    name: {type: mongoose.Schema.Types.String, required: true, unique: true},
    products: [
        {type: mongoose.Schema.ObjectId, ref: webConstants.PRODUCT_STR}
    ]
});

let Category = mongoose.model(webConstants.CATEGORY_STR, schema);

module.exports = Category;