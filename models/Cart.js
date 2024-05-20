import mongoose from 'mongoose';

const CartSchema = mongoose.Schema({
    productId: {
        type: String,
        ref:'product'
    },
    userId: String,
    quantity: Number,
},{
    timestamps: true,
})

const Cart = mongoose.models.cart || mongoose.model('cart', CartSchema);

export default Cart;