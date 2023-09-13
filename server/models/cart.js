const mongoose = require("mongoose");
const cartSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'user' ,
        required: true
    },
    items: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'item',
        required: true
    },
  });
  
module.exports = mongoose.model('cart', cartSchema);
  