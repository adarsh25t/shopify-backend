const User = require('../models/userModel.js');


async function getUserDetails(req, res, next) {

    try {
        const user = await User.findById(req.body.userId);
        
        res.status(200).json({
            success: true,
            message: "User Details",
            data: user
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Internal Server Error"
        })
    }
}

module.exports = getUserDetails;