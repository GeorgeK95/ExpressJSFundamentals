/**
 * Created by George-Lenovo on 5/31/2018.
 */

const webConstants = require('../webConstants');

const mongoose = require(webConstants.MONGOOSE);
mongoose.Promise = global.Promise;

module.exports = (config) => {
    mongoose.connect(config.connectionString);

    let db = mongoose.connection;

    db.once(webConstants.EVENT_TYPE_OPEN, (err) => {
        if (err) {
            console.log(err);
            return;
        }

        console.log(webConstants.CONNECTED_SUCCESSFULLY_MESSAGE);
    });

    db.on(webConstants.EVENT_TYPE_ERROR, (err) => {
        console.log(err);
    });

    require(webConstants.PRODUCT_MODEL_PATH);
    require(webConstants.CATEGORY_MODEL_PATH);
    require('../model/User').seedAdminUser();
};