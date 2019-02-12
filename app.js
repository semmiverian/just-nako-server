const express = require('express')
const app = express()

require('dotenv').config()

const PORT = process.env.PORT || 3000

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(3000, () => {
  console.log('App listening on port 3000!')
})
