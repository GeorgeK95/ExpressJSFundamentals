const bookService = require('../services/bookService');

module.exports.index = (req, res) => {
    let booksCount = bookService.count().exec(function (err, booksCount) {
        let passedVariable = req.query.successMsg;
        res.render('home/index', {booksCount, successMsg: passedVariable});
    });
};
