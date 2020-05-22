import express from "express";
import bodyParser from 'body-parser';
import morgan from "morgan";
var passport = require('passport'); // at header
const session = require('express-session');
const sessionConfig = require('../express-sessions.config.json');


// Routes

import { router as movies } from './routes/movies';
import { router as google } from './routes/auth/google'
const cors = require('cors')
 

const app = express()
const PORT = 8080

app.use(cors({allowedHeaders: ['Content-Type', 'Authorization']}));

// https://github.com/auth0/passport-linkedin-oauth2/issues/43

app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

// MIDDLEWARE
app.use(morgan('dev'))
app.use(
  bodyParser.urlencoded({
    extended: false
  })
)
app.use(bodyParser.json());

// sessions
app.use(
	session({
		secret: sessionConfig.secret || 'secret',
		resave: sessionConfig.resave || false, //required
		saveUninitialized: sessionConfig.saveUninitialized || false //required
	})
)

app.use(passport.initialize());
require("./passport");

// testing
app.get('/api', (req, res) => {
  console.log('hello')
  res.json({message: 'bubbles'})
});

app.post('/api', (req, res) => {
  console.log(req.body);
  const resume = JSON.stringify(req.body);

  console.log(resume);
  console.log(resume.length)
  res.sendStatus(200);
})

// routing

app.use('/api/movies', movies);
app.use('/api/auth/google', google)

// Starting Server
app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`)
})