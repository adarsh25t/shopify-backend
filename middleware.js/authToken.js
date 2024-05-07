import jwt from 'jsonwebtoken'

async function authToken(req, res, next) {

    try {
        const token = req.cookies?.token;
        if(!token) {
            return res.status(200).json({
                success: false,
                message: 'user not logged in'
            })
        }
        
        // verify token
        const decodedtoken = jwt.verify(token,process.env.TOEKN_SECRET)

        if(decodedtoken) {
            req.body.userId = decodedtoken.data._id;
            next();
        }
       
    } catch (error) {
        res.status(200).json({
            success: false,
            message: error.message
        })
    }
}

export {
    authToken
}