const WorkOut = require('../model/workout')

const getWorkOuts = async (req, res) => {
    try {
        const user_id = req.user._id
        let response = await WorkOut.find({ user_id })
        return res.status(200).json({
            msg: response ? 'success' : 'false',
            workouts: response ? response : []
        })
    } catch (e) {
        return res.status(500).json({
            error: e
        })
    }
}

const createWorkOut = async (req, res) => {
    try {
        const { title, reps, load } = req.body
        const user_id = req.user._id
        if (!title || !reps || !load) {
            return res.status(400).json({
                msg: "Missing input"
            })
        }
        const response = await WorkOut.create({ title, load, reps, user_id })
        return res.status(200).json({
            msg: response ? 'success' : 'failed',
            workout: response ? response : {}
        })
    } catch (e) {
        return res.status(500).json({
            error: e
        })
    }
}

const updateWorkOut = async (req, res) => {
    try {
        const { _id } = req.params
        if (!_id || Object.keys(req.body).length === 0) {
            return res.status(400).json({
                msg: 'Missing input'
            })
        }
        const response = await WorkOut.findByIdAndUpdate(_id, req.body, { new: true })
        return res.status(200).json({
            msg: response ? 'update success' : 'update failed',
            workout: response ? response : {}
        })
    } catch (e) {
        return res.status(500).json({
            error: e
        })
    }
}

const deleteWordOut = async (req, res) => {
    try {
        const { _id } = req.params
        if (!_id) {
            return res.status(400).json({
                msg: 'Missing input'
            })
        }
        const response = await WorkOut.findByIdAndDelete(_id)
        return res.status(200).json({
            msg: response ? 'success' : 'failed',
            workout: response ? response : {}
        })
    } catch (e) {
        return res.status(500).json({
            error: e
        })
    }
}

const getWorkOut = async (req, res) => {
    try {
        const { _id } = req.params
        if (!_id) {
            return res.status(400).json({
                msg: 'Missing input'
            })
        }
        const response = await WorkOut.findById(_id)
        return res.status(200).json({
            msg: response ? 'delete success' : 'delete failed',
            workout: response ? response : {}
        })
    } catch (e) {
        return res.status(500).json({
            error: e
        })
    }
}

module.exports = {
    getWorkOuts,
    getWorkOut,
    createWorkOut,
    updateWorkOut,
    deleteWordOut
}