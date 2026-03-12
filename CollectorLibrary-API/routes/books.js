var routes = require("express").Router();

var booksCtrl = require("../controllers/books")
//post
routes.post('/books',booksCtrl.newBook)

//get
routes.get('/books/:isbn', booksCtrl.getBookByISBN)

module.exports = routes