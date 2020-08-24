const {Schema, model} = require('mongoose')

const songSetSchema = new Schema({
  _id: {
    type: String,
  },
  title: {
    type: String,
  },
  songIds: [
    {
      _id: String,
      title: String
    }
  ],
  status: {
    type: Boolean,
  }
})

module.exports = model('SongSet', songSetSchema)
