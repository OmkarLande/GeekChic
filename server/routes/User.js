const express = require('express');
const router = express.Router();
const userController = require('../contollers/User');

// Define routes for the User Controller
router.post('/register', userController.register);
router.post('/login', userController.login);

module.exports = router;
