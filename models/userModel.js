const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    profileImage: {
        type: String,
    },
    role: {
        type: String,
        default: 'user'
    }
},{
    timestamps: true
})

const User = mongoose.models.user || mongoose.model('user',userSchema);
module.exports = User;