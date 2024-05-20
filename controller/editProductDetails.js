import Product from "../models/productModel.js";


// edit product
const editProduct = async (req,res) => {
    try {

        await Product.findByIdAndUpdate(req.body.id, req.body, {new: true});
        res.status(201).json({
            success: true,
            message: "Product updated successfully"
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Error in updating product"
        })
    }
}

export {
    editProduct
}