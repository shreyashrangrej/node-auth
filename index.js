require('dotenv').config()
const express = require('express')
const routes =  require('./routes/auth')

const app = express()
const port = process.env.PORT || 3000

require('./config/db');

app.use('/api', routes)

app.get('/', (req, res) => {
  res.send('Welcome to node-auth')
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})