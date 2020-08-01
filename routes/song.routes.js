const {Router} = require('express')

const Song = require('../models/Song')
const errorHandler = require('../utils/errorHandler')

const router = Router()

router.get('/', async (req, res) => {
  try {
    const songs = await Song.find({})

    res.status(200).json(songs)
  } catch (error) {
    errorHandler(res, error, 'tryAgain')
  }
})

module.exports = router
