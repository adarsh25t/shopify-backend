const User = require('../models/userModel.js');


// get all user accounts
const AllUsers = async (req,res) => {

    try {

        const users = await User.find();
        res.status(200).json({
            success: true,
            message: "All Users",
            data: users
        })
        
    } catch (error) {
        res.status(500).json({
            message: error,
            success: false
        })
    }
}

module.exports = AllUsers