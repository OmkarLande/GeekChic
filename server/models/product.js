const mongoose = require("mongoose");
// Product Model
const productSchema = new mongoose.Schema({
    name: { 
      type: String, 
      required: true 
    },
    description: {
      type:String,
      required:true,
      trim:true
    },
    price: { 
      type: Number, 
      required: true 
    },
    image: {
      type:String,
    },
    sizeOptions: {
      type:String,
      required:true,
      trim:true
    },
    category: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'category', 
      required:true
    },
    
  });
  
  module.exports = mongoose.model('product', productSchema);
  
  