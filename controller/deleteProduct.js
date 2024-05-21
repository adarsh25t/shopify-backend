const Product = require('../models/productModel.js');


// delete product items
const deleteProduct = async (req,res) => {

    try {

        const product = await Product.findByIdAndDelete(req.body.id);
        res.status(200).json({
            success: true,
            message: "Product Deleted"
        })
        
    } catch (error) {
        res.status(500).json({
            message: error.message,
            success: false
        })
    }
}

module.exports = deleteProduct