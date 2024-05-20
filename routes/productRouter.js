import express from 'express';
import { authToken } from '../middleware.js/authToken.js';
import { createNewProduct } from '../controller/createProduct.js';
import { getAllProducts } from '../controller/getAllProduct.js';
import { editProduct } from '../controller/editProductDetails.js';
import { deleteProduct } from '../controller/deleteProduct.js';
import { getCategoryProduct } from '../controller/getCategoryProduct.js';
import { getProductDetails } from '../controller/getProductDetails.js';

const productRouter = express.Router();

productRouter.post('/create',authToken ,createNewProduct);
productRouter.get('/getallproduct',authToken,getAllProducts);
productRouter.post('/update',authToken ,editProduct);
productRouter.post('/delete',authToken ,deleteProduct);
productRouter.post('/categoryproducts',getCategoryProduct);
productRouter.get('/productdetails/:productid',getProductDetails);


export default productRouter;