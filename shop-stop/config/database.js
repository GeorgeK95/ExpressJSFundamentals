/**
 * Created by George-Lenovo on 5/24/2018.
 */

let products = [];
let count = 1;

module.exports.products = {};
module.exports.products.getAll = () => {
    return products;
};
module.exports.products.add = (p) => {
    products.id = count++;
    products.push(p);
};
module.exports.products.findProductByName = (name) => {
    for (let product of products) {
        if (product.name == name) return product;

        return null;
    }
};