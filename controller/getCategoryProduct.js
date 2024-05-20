import Product from "../models/productModel.js";

// get categorie product
const getCategoryProduct = async (req,res) => {

    try {

        const {category} = req.body;
        const products = await Product.find({category});

        res.status(200).json({
            success: true,
            message: "Category Product",
            data: products
        })
        
    } catch (error) {
        res.status(200).json({
            success: false,
            message: error.message
        })
    }
}

export {
    getCategoryProduct
}