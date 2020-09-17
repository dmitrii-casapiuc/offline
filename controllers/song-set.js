const errorHandler = require('../utils/errorHandler')
const db = require('../models')
const Set = db.set
const Song = db.song

module.exports.getAll = async (req, res) => {
  try {
    const set = await Set.findAll({
      include: [{
        model: Song,
        as: 'sets',
        attributes: ['id', 'title'],
        through: {
          // This block of code allows you to retrieve the properties of the join table
          attributes: []
        }
      }],
    })

    res.status(200).json(set)
  } catch (error) {
    errorHandler(res, error, 'tryAgain')
  }
}
