const errorHandler = require('../utils/errorHandler')
const db = require('../models')
const Song = db.song

module.exports.getAll = async (req, res) => {
  try {
    const songs = await Song.findAll()

    res.status(200).json(songs)
  } catch (error) {
    errorHandler(res, error, 'tryAgain')
  }
}

module.exports.getById = async (req, res) => {
  try {
    const song = await Song.findByPk(req.params.id)
    res.status(200).json(song)
  } catch(error) {
    errorHandler(res, error, 'tryAgain')
  }
}
