const {Router} = require('express')

const SongSet = require('../models/SongSet')
const errorHandler = require('../utils/errorHandler')

const router = Router()

router.get('/', async (req, res) => {
  try {
    const songSet = await SongSet.find({})

    res.status(200).json(songSet)
  } catch (error) {
    errorHandler(res, error, 'tryAgain')
  }
})

module.exports = router
