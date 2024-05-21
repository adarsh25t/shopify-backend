const validator = require('validator');
const User = require('../models/userModel.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Create user login
const userSignIn = async (req, res) => {
    try {

        const {email, password} = req.body;

        // check email and password
        if (!validator.isEmail(email)) {
            return res.status(200).json({
                message: 'Invalid email'
            })
        }

        // check user already registered
        const user = await User.findOne({email})
        if (!user) {
            return res.status(200).json({
                message: 'User not found'
            })
        }

        // compare password
        const isMatch = await bcrypt.compare(password,user.password)
        if (!isMatch) {
            return res.status(200).json({
                message: 'Invalid password'
            })
        }

        const tokendata = {
            _id: user._id,
            email:user.email
        }

        const token = jwt.sign({
            data: tokendata
          }, process.env.TOEKN_SECRET, { expiresIn: 60 * 60 });

        const tokenOption = {
            httpOnly: true,
            secure:false,
        }
        
        res.cookie("token",token,tokenOption).status(200).json({
            success:true,
            message: 'User logged in successfully',
            token
        })
 

        
    } catch (error) {
        res.status(200).json({
            message: error.message
        })
    }
}

module.exports = userSignIn