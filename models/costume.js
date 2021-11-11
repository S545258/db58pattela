const mongoose = require("mongoose") 
const costumeSchema = mongoose.Schema({ 
 costume_type: String, 
 size: String, 
 cost: Number 
}) 
 
module.exports = mongoose.model("Costume", costumeSchema)
function recreateDB(){ 
    // Delete everything 
     Costume.deleteMany(); 
   
    let instance1 = new Costume({costume_type:"ghost",  size:'large',cost:25.4}); 
  instance1.save( function(err,doc) { 
        if(err) 
        return console.error(err); 
        console.log("First object saved") 
    }); 
  } 
  let instance2 = new Costume({costume_type:"checked shirt",  size:' xtra large',cost:26.4}); 
  instance2.save( function(err,doc) { 
        if(err) 
        return console.error(err); 
        console.log("second object saved") 
    });
    let instance3 = new Costume({costume_type:"half hands shirt",  size:' xtra large',cost:30.4}); 
    instance3.save( function(err,doc) { 
          if(err) 
          return console.error(err); 
          console.log("third object saved") 
      });
   
  let reseed = true; 
  if (reseed) { recreateDB();} 
   