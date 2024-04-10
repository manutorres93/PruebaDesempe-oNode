const mongoose = require('mongoose')


const booksSchema= new mongoose.Schema({
    name: String,
    author: String,
    pages: Number,
    description: String
});

const Book= mongoose.model('libros', booksSchema);

module.exports = Book;