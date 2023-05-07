const User = require('../model/user')
const { generalAccessToken } = require('../middlewares/jwt')

const getUsers = async (req, res) => {
    try {
        const response = await User.find()
        return res.status(200).json({
            msg: response ? 'success' : 'false',
            users: response ? response : []
        })
    } catch (e) {
        return res.status(500).json({
            error: e
        })
    }
}

const getUser = async (req, res) => {
    try {
        const { _id } = req.user
        const user = await User.findById(_id).select('-password')
        return res.status(200).json({
            success: user ? true : false,
            user: user ? user : 'User not found'
        })
    } catch (e) {
        return res.status(500).json({
            error: e
        })
    }
}

const register = async (req, res) => {
    try {
        const { email, password } = req.body
        if (!email || !password) {
            return res.status(400).json({
                msg: "Missing input"
            })
        }
        const isEmail = await User.findOne({ email })
        if (isEmail) {
            throw new Error('Email already exists')
        }
        const response = await User.create(req.body)
        return res.status(200).json({
            msg: response ? 'register success' : 'register failed',
            user: response ? response : {}
        })
    } catch (e) {
        return res.status(500).json({
            error: e
        })
    }
}

const login = async (req, res) => {
    try {
        let { email, password } = req.body
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                mes: 'Missing inputs'
            })
        }
        const response = await User.findOne({ email })
        if (response && response.isCorrectPassword(password)) {
            const { password, ...user } = response.toObject()
            const accessToken = generalAccessToken(response._id)
            return res.status(200).json({
                success: true,
                mes: "Login successfull",
                user,
                accessToken
            })
        } else {
            return res.status(200).json({
                success: false,
                mes: 'Invalid credentials!'
            })
        }
    } catch (e) {
        return res.status(500).json({
            error: e
        })
    }
}

const updateUser = async (req, res) => {
    try {
        const { _id } = req.params
        if (!_id || Object.keys(req.body).length === 0) {
            return res.status(200).json({
                msg: 'Missing input'
            })
        }
        const response = await WorkOut.findByIdAndUpdate(_id, req.body, { new: true })
        return res.status(200).json({
            msg: response ? 'update success' : 'update failed',
            user: response ? response : {}
        })
    } catch (e) {
        return res.status(500).json({
            error: e
        })
    }
}

const deleteUser = async (req, res) => {
    try {
        const { _id } = req.params
        if (!_id) {
            return res.status(200).json({
                msg: 'Missing input'
            })
        }
        const response = await WorkOut.findByIdAndDelete(_id)
        return res.status(200).json({
            msg: response ? 'delete success' : 'delete failed',
            user: response ? response : {}
        })
    } catch (e) {
        return res.status(500).json({
            error: e
        })
    }
}


module.exports = {
    getUsers,
    getUser,
    login,
    register,
    updateUser,
    deleteUser
}