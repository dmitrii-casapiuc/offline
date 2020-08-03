const {Router} = require('express')

const Song = require('../models/Song')
const errorHandler = require('../utils/errorHandler')

const router = Router()

router.get('/', async (req, res) => {
  try {
    const songs = await Song.find({}).select('title').exec()

    res.status(200).json(songs)
  } catch (error) {
    errorHandler(res, error, 'tryAgain')
  }
})

router.get('/:id', async (req, res) => {
  try {
    const song = await Song.findById(req.params.id)
    res.status(200).json(song)
  } catch(error) {
    errorHandler(res, error, 'tryAgain')
  }
})

module.exports = router
