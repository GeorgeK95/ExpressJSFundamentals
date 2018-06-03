/**
 * Created by George-Lenovo on 5/31/2018.
 */

const webConstants = require('../webConstants');
const path = require(webConstants.PATH_STR);

module.exports = {
    development: {
        connectionString: 'mongodb://localhost/ShopStopApp',
        rootPath: path.normalize(path.join(__dirname, webConstants.PREVIOUS_PREFIX_2))
    },
    production: {}
};