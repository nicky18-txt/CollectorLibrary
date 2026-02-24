var routes = require("express").Router();

var routeTestCtrl = require("../controllers/routeTest")
//get
routes.get('/test',routeTestCtrl.getTest)

module.exports = routes