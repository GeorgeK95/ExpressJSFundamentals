const bookService = require('../services/bookService');

const Book = require('../models/Book');

module.exports.addBookGet = (req, res) => {
    res.render('book/addBook');
};

module.exports.addBookPost = (req, res) => {
    let book = req.body;

    if (bookService.addBook(req, res, book)) {
        let successMsg = encodeURIComponent('Book Added.');
        return res.redirect('/?successMsg=' + successMsg);
    }

    res.locals.errMsg = 'Please fill all fields!';
    res.render('book/addBook', book);
};

module.exports.viewAllBooks = (req, res) => {
    let findAllQuery = bookService.getAllBooks();

    findAllQuery.exec(function (err, books) {
        if (err) console.log(err);

        res.render('book/viewAll', {books});
    });
};

module.exports.details = (req, res) => {
    let bookId = req._parsedOriginalUrl.pathname.substr(
        req._parsedOriginalUrl.pathname.lastIndexOf('/') + 1
    );

    let book = bookService.findOne(bookId).exec(function (err, book) {
        if (err) console.log(err);

        res.render('book/details', {book});
    });
};