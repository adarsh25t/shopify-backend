const validator = require('validator');
const User = require('../models/userModel.js');


// update user Details


const updateUserDetails = async (req, res) => {

    try {

        const {name, email,role} = req.body;

        if (name.trim() === "") {
            return res.status(200).json({
                success: false,
                message: "Name cannot be empty"
            })
        }

        if (email.trim() === "" || !validator.isEmail(email)) {
            return res.status(200).json({
                success: false,
                message: "Invalid email"
            })
        }

        const user = await User.findByIdAndUpdate(req.body.id,{name, email,role});
        res.status(200).json({
            success: true,
            message: "User Details Updated",
            user
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: error,
            success: false
        })
    }
}

module.exports = updateUserDetails