const mongoose = require("mongoose");

// Order Model
const itemSchema = new mongoose.Schema({
    product: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'product',
        required: true
    },
    quantity: {
        type:Number,
        required:true
    },
  });

  module.exports = mongoose.model("item",itemSchema);
  