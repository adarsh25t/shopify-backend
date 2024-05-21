

// user type check admin

const User = require('../models/userModel.js');

async function isAdmin(userid) {

    if (!userid) {
        return false;
    }
    const user = await User.findById(userid);
    
    if (user.role === "Admin") {
        return true;
    }
    return false;
}

module.exports = isAdmin;