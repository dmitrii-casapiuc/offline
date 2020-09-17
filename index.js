
const express = require('express')
const cors = require('cors')
const path = require('path')

const db = require('./models/')
const songRoutes = require('./routes/song.routes')
const songSetRoutes = require('./routes/song-set.routes')

const app = express()

app.use(express.json({ extended: true }))
app.use(cors())

// register routes
app.use('/api/songs', songRoutes)
app.use('/api/song-set', songSetRoutes)

if (process.env.NODE_ENV === 'production') {
  app.use('/', express.static(path.join(__dirname, 'client', 'dist')))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'))
  })
}

const PORT = process.env.PORT || 5001

async function start() {
  try {
    await db.sequelize.sync()
    app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`))
  } catch (error) {
    console.log('Server Error', error.message)
    process.exit(1)
  }
}

start()
