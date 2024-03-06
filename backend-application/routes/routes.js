const express = require("express");
const router = express();

const ApiResponse = require("../models/ApiResponse");
const Products = require('../services/products');

router.route('/').get(async(req, res) => {
    let apiResponse = new ApiResponse();

    const response = await Products.findProducts(req.query);
    if(response.error){ 
        apiResponse.setError(response.error);
        res.json({ apiResponse });
    } else {
        apiResponse.setProducts(response);
        res.status(200).json({ apiResponse });
    }

});

router.route('/:id').get(async(req, res) => {
    let apiResponse = new ApiResponse();

    const response = await Products.findProduct(req.params);
    if(response.error){
        apiResponse.setError(response.error);
        res.json({ apiResponse });
    } else {
        apiResponse.setProducts(response);
        res.status(200).json({ apiResponse });
    }
});

module.exports = router;