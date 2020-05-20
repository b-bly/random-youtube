import express from "express";
import bodyParser from 'body-parser';
import morgan from "morgan";
var passport = require('passport'); // at header

// Routes

import { router as movies } from './routes/movies';
import { router as google } from './routes/auth/google'

const app = express()
const PORT = 8080

// MIDDLEWARE
app.use(morgan('dev'))
app.use(
  bodyParser.urlencoded({
    extended: false
  })
)
app.use(bodyParser.json())

app.use(passport.initialize());
require("./config/passport");

// routing

app.use('/movies', movies);
app.use('/auth/google', google)

// Starting Server
app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`)
})