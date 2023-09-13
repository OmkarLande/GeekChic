const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    user: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'user',
      required:true
    },
    items: {
      type:mongoose.Schema.Types.ObjectId,
      ref:'item',
      required:true
    },
    orderDate: {
      type: Date, 
      default: Date.now,
      required:true
    },
    total: {
      type: Number,
      required:true
    }
  });
  
  module.exports= mongoose.model('order', orderSchema);
  