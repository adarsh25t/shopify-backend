const isAdmin = require('../middleware.js/isAdmin.js');
const Product = require('../models/productModel.js');


// create a new product
const createNewProduct = async (req, res) => {

    try {

        if(!isAdmin(req.body.userId)) {
            return res.status(200).json({
                success: false,
                message: "You are not authorized to perform this action"
            })
        }

        const newProduct = new Product({
            productName: req.body.productName,
            brandName: req.body.brandName,
            price: req.body.price,
            selling: req.body.selling,
            category: req.body.category,
            productImage: req.body.productImage,
            description: req.body.description,
        })

        const product = await newProduct.save();
        res.status(201).json({
            success: true,
            message: "New Product Created",
            data: product
        })
        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

    
module.exports = createNewProduct