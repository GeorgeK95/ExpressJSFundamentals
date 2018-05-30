/**
 * Created by George-Lenovo on 5/24/2018.
 */

const webConstants = require('../webConstants');

const fs = require(webConstants.FS_MODULE);
const path = require(webConstants.PATH_MODULE);
const dbJsonPath = path.join(__dirname, webConstants.DB_JSON_PATH);

module.exports.products = {};

module.exports.products.getAll = getProducts();

module.exports.products.add = (p) => {
    let products = getProducts();
    p.id = products.length + 1;
    products.push(p);
    saveProducts(products);
};

module.exports.products.findProductByName = (name) => {
    return getProducts().filter(p => p.toLowerCase().includes(name));
};

function getProducts() {
    return new Promise(function (resolve, reject) {
        // Do async job
        fs.readFile(dbJsonPath, webConstants.ENCODING_UTF_8, (err, data) => {
            if (err) {
                return console.log(err);
            }

            resolve(JSON.parse(data));
        });
    })
}

module.exports.products.saveProducts = (product) => {

    getProducts().then(function (result) {
        result.push(product);
        result = JSON.stringify(result);

        fs.writeFile(dbJsonPath, result, function (err) {
            if (err) return console.log(err);
        });
    });

};