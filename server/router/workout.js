const express = require('express')
const router = express.Router()
const controller = require('../controller/workout')
const { verifyAccessToken } = require('../middlewares/verifyToken')


router.use(verifyAccessToken)
router.get('/', controller.getWorkOuts)
router.get('/:_id', controller.getWorkOut)
router.post('/', controller.createWorkOut)
router.put('/:_id', controller.updateWorkOut)
router.delete('/:_id', controller.deleteWordOut)

module.exports = router
