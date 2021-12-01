const mongoose = require("mongoose") 
const costumeSchema = mongoose.Schema({ 
 costume_type: String, 
 size: {type:String,minlength:1}, 
 cost: {type:Number,min:26,max:50} 
}) 
 
module.exports = mongoose.model("Costume", costumeSchema)
