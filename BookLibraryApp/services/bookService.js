/* Created by George-Lenovo on 6/11/2018. */

const bookRepository = require('../repositories/bookRepository');

module.exports.addBook = (req, res, book) => {
    if (!book.bookTitle || book.bookTitle === '' || !book.bookPoster || book.bookPoster === '') {
        return false;
    }

    bookRepository.persistBook(book);

    return true;
};

module.exports.getAllBooks = (req, res) => {
    return bookRepository.getAll();
};

module.exports.findOne = (bookId) => {
    return bookRepository.findOne(bookId);
};

module.exports.count = () => {
    return bookRepository.count();
};
