

// increment and decrement the cart quantity

import Cart from "../models/Cart.js";

const incrementItemQuantity = async (req, res) => {

    try {
        const cart = await Cart.findOne({ userId: req.body.userId, productId: req.body.productId });

        if (!cart) {
            return res.status(200).json({
                success: false,
                message: 'Item not found'
            })
        }

        cart.quantity += 1;
        await cart.save();

        res.status(200).json({
            success: true,
            message: 'Item quantity incremented'
        })


    } catch (error) {
        res.status(500).json({
            message: error,
            success: false
        })
    }
}

const decrementItemQuantity = async (req, res) => {

    try {

        const cart = await Cart.findOne({ userId: req.body.userId, productId: req.body.productId });
        if (!cart) {
            return res.status(200).json({
                success: false,
                message: 'Item not found'
            })
        }

        if (cart.quantity === 1) {
            await Cart.findByIdAndDelete(cart._id)
            return res.status(200).json({
                success: true,
                message: 'Item deleted'
            })
        }

        cart.quantity -= 1;
        await cart.save();

        res.status(200).json({
            success: true,
            message: 'Item quantity incremented'
        })


    } catch (error) {
        res.status(500).json({
            message: error,
            success: false
        })
    }
}

const deleteItem = async (req, res) => {
    try {

        const cart = await Cart.findOneAndDelete({ userId: req.body.userId, productId: req.body.productId });
        res.status(200).json({
            success: true,
            message: 'Item deleted'
        })

    } catch (error) {
        res.status(500).json({
            message: error,
            success: false
        })
    }
}

export {
    incrementItemQuantity,
    decrementItemQuantity,
    deleteItem
}