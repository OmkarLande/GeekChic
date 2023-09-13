const express = require('express');
const router = express.Router();
const categoryController = require('../contollers/Category');

// Define routes for the Category Controller
router.get('/categories', categoryController.categories);

module.exports = router;
