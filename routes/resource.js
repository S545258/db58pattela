var express = require("express");
const costume_controlers= require('../controllers/costume'); 
var router = express.Router();

// Require controller modules.
var api_controller = require("../controllers/api");
var costume_controller = require("../controllers/costume");

/// API ROUTE ///



/* GET costumes */ 
router.get('/', costume_controller.costume_view_all_Page ); 

// GET resources base.
router.get("/", api_controller.api);


router.get('/delete', costume_controller.costume_delete_Page);

// DELETE request to delete Costume. 
router.delete('/costumes/:id', costume_controller.costume_delete); 

/// costume ROUTES ///

// POST request for creating a costume
router.post("/costume", costume_controller.costume_create_post);




// PUT request to update costume.
router.put("/costume/:id", costume_controller.costume_update_put);

// GET request for one costume.
router.get("/costume/:id", costume_controller.costume_detail);

// GET request for list of all costume items.
router.get("/costume", costume_controller.costume_list);

// A little function to check if we have an authorized user and continue on or 
// redirect to login. 
const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
  }

module.exports = router;
 
/* GET detail costume page */ 
router.get('/detail', costume_controlers.costume_view_one_Page); 

/* GET create costume page */ 
router.get('/create', costume_controlers.costume_create_Page); 
 
/* GET create update page */ 

router.get('/update', secured, costume_controlers.costume_update_Page); 

router.get('/delete', secured, costume_controlers.costume_delete); 
 
