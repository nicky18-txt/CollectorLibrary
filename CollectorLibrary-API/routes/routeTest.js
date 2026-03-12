var routes = require("express").Router();

var routeTestCtrl = require("../controllers/routeTest")
//get
routes.get('/test',routeTestCtrl.getTest)

//post
routes.post('/test',routeTestCtrl.postTest)

module.exports = routes