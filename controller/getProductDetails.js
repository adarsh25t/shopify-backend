const Product = require('../models/productModel.js');


// get product details
const getProductDetails = async (req,res) => {

    try {

        const query = req.params?.productid
        const product = await Product.findOne({_id: query});
        res.status(200).json({
            success: true,
            message: "Product Details",
            data: product
        })
        
    } catch (error) {
        res.status(500).json({
            message: error,
            success: false
        })
    }
}

module.exports = getProductDetails