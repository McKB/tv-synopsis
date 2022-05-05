const express = require('express')
const showdata = require('./showdata')

const app = express()

app.set('view engine', 'pug')
app.use(express.static('public'))

// don't need these lines?
app.get('/', (req, res) => {
  return res.render('index', { showdata })
})

// get for seasons
app.get('/seasons/:number', (req, res) => {
  const season = showdata.seasons.find((season) => { return season.number === parseInt(req.params.number) })

  return res.render('seasons', { season })
})

app.all('*', (req, res) => {
  return res.status(404).send('Sorry for the inconvenience, but Kim is not found here.')
})

app.listen(1337, () => {
  console.log('listening on port 1337...') // eslint-disable-line no-console
})
