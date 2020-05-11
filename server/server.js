let args = {files: true};
require('ts-node').register(args);

const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const app = express()
const PORT = 8080

// Routes

// MIDDLEWARE
app.use(morgan('dev'))
app.use(
  bodyParser.urlencoded({
    extended: false
  })
)
app.use(bodyParser.json())

//routing

// Starting Server 
app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`)
})