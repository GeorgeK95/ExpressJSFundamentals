/**
 * Created by George-Lenovo on 6/7/2018.
 */

const handlers = require('../handlers/handlerBlender');

module.exports = (app) => {
    app.get('/favicon.ico', (req, res) => res.status(204));

    app.get('/', handlers.home.index);

    app.get('/addBook', handlers.book.addBookGet);
    app.post('/addBook', handlers.book.addBookPost);

    app.get('/viewAllBooks', handlers.book.viewAllBooks);

    app.get('/books/details/:id', handlers.book.details);
};