/**
 * Created by George-Lenovo on 5/26/2018.
 */

const fs = require('fs');

let dictionary = {};

exports.dictionary = dictionary;

exports.put = function (key, value) {
    if (typeof key === 'string' || key instanceof String) {
        if (key in dictionary) {
            throw  `'${key}' already defined.`;
            // console.log();
            // return;
        }

        dictionary[key] = value;
    } else {
        throw 'Key is not in proper format./require string/';
    }
};

exports.get = function (key) {
    if (typeof key === 'string' || key instanceof String) {
        if (key in dictionary === false) {
            console.log(`'${key}' was not found.`);
            return;
        }
        return dictionary[key];
    } else {
        console.log('Key is not in proper format./require string/');
    }
};

exports.getAll = function () {
    if (Object.keys(dictionary).length == 0) {
        console.log('There is no data in collection.');
        return;
    }
    return dictionary;
};

exports.update = function (key, value) {
    if (typeof key === 'string' || key instanceof String) {
        if (key in dictionary) {
            dictionary[key] = value;
            return;
        }

        console.log(`'${key}' is not defined.`);

    } else {
        console.log('Key is not in proper format./require string/');
    }
};

exports.delete = function (key) {
    if (typeof key === 'string' || key instanceof String) {
        if (key in dictionary) {
            delete dictionary[key];
            return;
        }

        throw `'${key}' is not defined.`;
    } else {
        throw 'Key is not in proper format./require string/';
    }
};

exports.clear = function () {
    dictionary = {};
};

exports.save = function () {
    if (!fs.existsSync('../data/storage.json')) {
        fs.appendFile('storage.json', '{}', function (err) {
            if (err) throw err;

            console.log('Storage.json created.');
        });
    }

    fs.writeFile('../data/storage.json', JSON.stringify(dictionary), function (err) {
        if (err) return console.log(err);

        console.log("The file was saved !");
    });
};

exports.load = function () {
    if (!fs.existsSync('../data/storage.json')) {
        console.log('Storage.json does not exist !');
        return;
    }

    let str = fs.readFileSync(__dirname + '/../data/storage.json', 'utf8');
    str = JSON.parse(str);

    Object.keys(str).forEach(function (key) {
        dictionary[key] = str[key];
    });

};