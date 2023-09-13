const mongoose = require("mongoose");

// Category Model
const categorySchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true,
        trim:true 
    },
    description: {
        type: String,
        trim:true,
        required: true
    }
  });
  
  module.exports= mongoose.model('category', categorySchema);
  