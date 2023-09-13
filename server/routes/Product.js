const express = require('express');
const router = express.Router();
const productController = require('../contollers/Product');

router.get('/products', productController.listProducts);
router.get('/products/:productId', productController.product);

module.exports = router;
