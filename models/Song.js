const {Schema, model} = require('mongoose')

const songSchema = new Schema({
  _id: {
    type: String,
  },
  title: {
    type: String,
  },
  tonality: {
    type: String,
  },
  lyrics: {
    type: String,
  },
  date: {
    type: String,
  }
})

module.exports = model('Song', songSchema)
