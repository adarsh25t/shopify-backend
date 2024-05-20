import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true
    },
    brandName: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    productImage: Array,
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    selling: {
        type: Number,
        required: true
    }
});

const Product = mongoose.models.product || mongoose.model('product',productSchema);
export default Product; 