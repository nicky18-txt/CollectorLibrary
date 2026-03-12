var routes = require("express").Router();

var authorsCtrl = require("../controllers/authors")
//get
routes.get('/authors',authorsCtrl.getAuthors)

//post
//routes.post('/authors',authorsCtrl.postauthors)

//delete
//routes.delete('/authors/:id',authorsCtrl.deleteauthors)

module.exports = routes