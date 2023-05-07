const jwt = require('jsonwebtoken')

const verifyAccessToken = async (req, res, next) => {
    try {

        if (req?.headers?.authorization?.startsWith('Bearer')) {
            const token = req.headers.authorization.split(' ')[1];
            jwt.verify(token, process.env.SECRET_JWT, (err, decode) => {
                if (err) {
                    return res.status(401).json({
                        success: false,
                        mes: 'Invalid access token'
                    })
                }
                req.user = decode
                next();
            })
        } else {
            return res.status(401).json({
                success: false,
                mes: 'Require authentication!'
            })
        }
    } catch (e) {
        return res.status(500).json({
            error: e
        })
    }
}


module.exports = {
    verifyAccessToken
}