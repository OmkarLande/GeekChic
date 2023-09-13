const mongoose = require('mongoose');

// User Model
const userSchema = new mongoose.Schema({
  username: { 
    type: String, 
    required: true,
    trim:true
  },
  email: { 
    type: String, 
    required: true ,
    trim: true
  },
  password: { 
    type: String, 
    required: true,
    trim:true
  },
});

module.exports = mongoose.model('user', userSchema);

