/**
 * Created by George-Lenovo on 6/11/2018.
 */

const Book = require('../models/Book');

module.exports.persistBook = (book) => {
    Book.create(book);
};

module.exports.getAll = (req, res) => {
    return Book.find({}).sort({bookYear: -1});
};

module.exports.findOne = (bookId) => {
    return Book.find({_id: bookId});
};

module.exports.count = () => {
    return Book.count();
};