const express = require('express');
const router = express.Router();
const productController = require('../contollers/Product');

router.get('/list', productController.listProducts);
router.get('/list/:productId', productController.product);
router.post('/createProduct', productController.createproduct);
module.exports = router;
