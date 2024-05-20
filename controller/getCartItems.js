import Cart from "../models/Cart.js";


// get user cart items


async function getCartItems(req, res) {
    try {
        const cartItems = await Cart.find(
            { userId: req.body.userId }).populate('productId');
            console.log(cartItems);

        res.status(200).json({ 
            success: true,
            cartItems
        });
    } catch (error) {
        res.status(500).json({
            message: error,
            success: false
        });
    }
}

export {
    getCartItems
}