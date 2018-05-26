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
    if (!fs.existsSync(dbJsonPath)) {
        fs.appendFile(webConstants.DB_JSON_FILE_NAME, webConstants.EMTPY_STR, function (err) {
            if (err) throw err;
        });

        fs.writeFileSync(dbJsonPath, '[]');
        return [];
    }

    let json = fs.readFileSync(dbJsonPath).toString() || '[]';
    let products = JSON.parse(json);

    return products;
}

function saveProducts(products) {
    let json = JSON.stringify(products);
    // fs.writeFileSync(dbJsonPath, json);
}