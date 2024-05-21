const express = require('express')
const authToken = require('../middleware.js/authToken');
const createNewProduct = require('../controller/createProduct.js');
const getAllProducts = require('../controller/getAllProduct.js');
const editProduct = require('../controller/editProductDetails.js');
const deleteProduct = require('../controller/deleteProduct.js');
const getCategoryProduct = require('../controller/getCategoryProduct.js');
const getProductDetails = require('../controller/getProductDetails.js');

const productRouter = express.Router();

productRouter.post('/create',authToken ,createNewProduct);
productRouter.get('/getallproduct',authToken,getAllProducts);
productRouter.post('/update',authToken ,editProduct);
productRouter.post('/delete',authToken ,deleteProduct);
productRouter.post('/categoryproducts',getCategoryProduct);
productRouter.get('/productdetails/:productid',getProductDetails);

module.exports = productRouter