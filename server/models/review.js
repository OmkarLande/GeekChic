const mongoose = require("mongoose");
// Review Model
const reviewSchema = new mongoose.Schema({
    user: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'user' 
    },
    product: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'product' 
    },
    rating: {
      type: Number,
      required:true
    },
    text: {
      type:String,
      required:true,
      trim:true
    },
  });
  
module.exports = mongoose.model('review', reviewSchema);
  