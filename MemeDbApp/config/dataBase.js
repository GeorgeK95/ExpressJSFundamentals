const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

module.exports = (config) => {
    mongoose.connect(process.env.MONGOLAB_URI || config.connectionString);

    let db = mongoose.connection;

    db.once('open', (err) => {
        if (err) {
            console.log(err);
            return;
        }

        console.log('Connected to db successfully :).');
    });

    db.on('error', (err) => {
        console.log(err);
    });

    // require(webConstants.PRODUCT_MODEL_PATH);
    // require(webConstants.CATEGORY_MODEL_PATH);
};