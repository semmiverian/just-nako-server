const express = require('express')
const app = express()
const path = require('path')
const https = require('https')
const fs = require('fs')

require('dotenv').config()

const PORT = process.env.PORT || 3000

// Set public static file
app.use(express.static(path.join(__dirname, 'public')))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`)
})

// Fetch https certification
// const options = {
//   cert: fs.readFileSync(path.join(__dirname, 'key/fullchain.pem')),
//   key: fs.readFileSync(path.join(__dirname, 'key/privkey.pem'))
// }

// Create HTTPS Instance
// const httpsServer = https.createServer(options, app)

// Listen https request
// httpsServer.listen(443, () => {
//   console.log('succesfully connected using https ');
// })
