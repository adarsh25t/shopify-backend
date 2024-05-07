import validator from "validator";
import User from "../models/userModel.js"
import bcrypt from "bcrypt";

async function userSignUp(req, res) {
       
    try {

        const {email, password,name,profileImage} = req.body;

        // check email
        if (!validator.isEmail(email)) {
            return res.status(200).json({
                success: false,
                message: "Invalid email"
            })
        }

        // check password length
        if (password.length < 8) {
            return res.status(200).json({
                success: false,
                message: "Password must be at least 8 characters long"
            })
        }

        // check email already registered
        const user = await User.findOne({email});
        if (user) {
            return res.status(200).json({
                success: false,
                message: "Email already registered"
            })
        }


        // hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // create new user
        const newUser = await User.create({
            name,
            email,
            password:hashedPassword,
            profileImage
        })

        res.status(201).json({
            success: true,
            message: "User created successfully",
            data: newUser
        })


        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error
        })
    }
}

export {
    userSignUp
}