
// logout the user
async function userlogout(req, res) {
    try {
        res.clearCookie("token");
        res.status(200).json({
            success: true,
            message: 'user logged out'
        });
    } catch (error) {
        res.status(500).json({
            message: error,
            success: false
        })
    }
}

export {
    userlogout
}