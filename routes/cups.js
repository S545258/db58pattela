var express = require('express');
var router = express.Router();
var costume_controller = require("../controllers/costume");

// A little function to check if we have an authorized user and continue on 
or 
// redirect to login. 
const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
  } 

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('cups', { title: 'Search Results Cups' });
});

/* GET create costume page */ 


module.exports = router;
