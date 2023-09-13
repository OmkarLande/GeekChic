const express = require('express');
const router = express.Router();
const categoryController = require('../contollers/Category');

// Define routes for the Category Controller
router.get('/list', categoryController.categorieslist);
router.post('/createcategory', categoryController.createcategory);

module.exports = router;
