const jwt = require('jsonwebtoken')

const generalAccessToken = (uid) => {
    return jwt.sign({ _id: uid }, process.env.SECRET_JWT, { expiresIn: '12000s' })
}

module.exports = {
    generalAccessToken
}