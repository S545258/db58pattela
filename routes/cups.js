var express = require('express');
var router = express.Router();
var costume_controller = require("../controllers/costume");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('cups', { title: 'Search Results Cups' });
});

/* GET create costume page */ 


module.exports = router;
