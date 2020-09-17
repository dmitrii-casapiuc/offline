const {Router} = require('express')
const controller = require('../controllers/song-set')
const router = Router()

router.get('/', controller.getAll)

module.exports = router
