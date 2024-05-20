

// user type check admin

import User from "../models/userModel.js";

export async function isAdmin(userid) {

    if (!userid) {
        return false;
    }
    const user = await User.findById(userid);
    
    if (user.role === "Admin") {
        return true;
    }
    return false;
}