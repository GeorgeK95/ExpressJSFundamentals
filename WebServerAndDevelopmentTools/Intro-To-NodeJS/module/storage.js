/**
 * Created by George-Lenovo on 5/26/2018.
 */

const fs = require('fs');

let dictionary = {};

exports.dictionary = dictionary;

exports.put = function (key, value) {
    if (typeof key === 'string' || key instanceof String) {
        if (key in dictionary) {
            throw `'${key}' already defined.`;
        }

        dictionary[key] = value;
    } else {
        throw new Error('Key is not in proper format./string required/');
    }
};

exports.get = function (key) {
    if (typeof key === 'string' || key instanceof String) {
        if (key in dictionary === false) {
            throw `'${key}' was not found.`;
        }
        return dictionary[key];
    } else {
        throw new Error('Key is not in proper format./string required/');
    }
};

exports.getAll = function () {
    if (Object.keys(dictionary).length == 0) {
        return 'There are no items in the storage!';
    }
    return dictionary;
};

exports.update = function (key, value) {
    if (typeof key === 'string' || key instanceof String) {
        if (key in dictionary) {
            dictionary[key] = value;
            return;
        }

        throw new Error(`'${key}' is not defined.`);
    } else {
        throw new Error('Key is not in proper format./string required/');
    }
};

exports.delete = function (key) {
    if (typeof key === 'string' || key instanceof String) {
        if (key in dictionary) {
            delete dictionary[key];
            return;
        }

        throw new Error(`'${key}' is not defined.`);
    } else {
        throw new Error('Key is not in proper format./string required/');
    }
};

exports.clear = function () {
    dictionary = {};
};

exports.save = function () {
    return new Promise((resolve, reject) => {
        let content = fs.writeFile('../data/storage.json', JSON.stringify(dictionary), (err, content) => {
            if (err) {
                throw new Error(err.message);
            }
            console.log("File saved !");
            resolve();
        });
    });
};

exports.load = function () {
    return new Promise((resolve, reject) => {
        let content = fs.readFile(__dirname + '/../data/storage.json', 'utf8', (err, content) => {
            if (err) {
                content = {};
            } else {
                content = JSON.parse(content);
            }

            dictionary = content;

            resolve();
        });
    });
};