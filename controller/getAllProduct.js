import Product from "../models/productModel.js";


// get app product
const getAllProducts = async (req,res) => {

    try {

        const products = await Product.find({});
        res.status(200).json({
            success: true,
            data: products
        })

        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Internal Server Error"
        })
    }
}
export {
    getAllProducts
}