import express from "express";
import bodyParser from 'body-parser';
import morgan from "morgan";
import { passport } from './passport'
const session = require('express-session');
import { config } from './app.config';

// Routes

import { movies } from './routes/movies';
import { googleOauth } from './routes/auth/google-oauth';
import { user } from './routes/auth/user';
 

const app = express()
const PORT = 8080

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
		secret: config.session.secret || 'secret',
		resave: config.session.resave || false, //required
		saveUninitialized: config.session.saveUninitialized || false //required
	})
)

app.use(passport.initialize());
app.use(passport.session());


// log session 

// app.use( (req: any, res: any, next: any) => {
//   console.log('req.session', req.session);
//   return next();
// });

// testing
app.get('/api', (req, res) => {
  console.log('hello')
  res.json({message: 'bubbles'})
});

// routing

app.use('/api/movies', movies);
app.use('/api/auth/google', googleOauth);
app.use('/api/auth/user', user)

// Starting Server
app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`)
})