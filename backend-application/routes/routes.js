const express = require("express");
const router = express();

const Products = require('../services/products');

router.route('/').get(Products.findProducts);
router.route('/:id').get(Products.findProduct);

module.exports = router;