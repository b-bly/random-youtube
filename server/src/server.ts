import express from "express";
import bodyParser from 'body-parser';
import morgan from "morgan";

// Routes

import { router as movies } from './routes/movies';

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

// routing

app.use('/movies', movies);

// Starting Server
app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`)
})