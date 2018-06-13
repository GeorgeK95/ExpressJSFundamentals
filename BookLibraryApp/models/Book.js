/**
 * Created by George-Lenovo on 6/8/2018.
 */

const mongoose = require('mongoose');

let schema = mongoose.Schema({
    bookTitle: {type: mongoose.Schema.Types.String, required: true, unique: true},
    bookPoster: {type: mongoose.Schema.Types.String, required: true},
    bookYear: {type: mongoose.Schema.Types.String},
    bookAuthor: {type: mongoose.Schema.Types.String}
});

let Book = mongoose.model('book', schema);

module.exports = Book;