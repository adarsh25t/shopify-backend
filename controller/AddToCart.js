const Cart = require('../models/Cart.js');


// add to cart
const addToCart = async (req,res) => {

    try {

        const {productId,userId} = req.body;
        
        // check product already in the cart
        const alreadyInCart = await Cart.findOne({productId: productId, userId: userId});
        if(alreadyInCart) {
            return res.status(200).json({
                success: false,
                message: "Product already in the cart"
            })  
        }

        const cart = new Cart({
            productId: productId,
            userId: userId,
            quantity: 1,
        })
        await cart.save();
        res.status(200).json({
            success: true,
            message: "Product added to cart"
        })

        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        }) 
    }
}

module.exports = addToCart