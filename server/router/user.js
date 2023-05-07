const express = require('express')
const router = express.Router()
const controller = require('../controller/user')
const { verifyAccessToken } = require('../middlewares/verifyToken')

router.get('/', controller.getUsers)
router.get('/', verifyAccessToken, controller.getUser)
router.post('/login', controller.login)
router.post('/signup', controller.register)
router.put('/:_id', controller.updateUser)
router.delete('/:_id', controller.deleteUser)

module.exports = router
