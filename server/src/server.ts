// for dev environment variables

if (process.env.NODE_ENV !== 'production') {
	console.log('dev environment')
	const dotenv = require("dotenv").config();
	if (dotenv.error) { console.log(dotenv.error); }
} else {
	console.log('production environment')
}
import express from "express";
import bodyParser from 'body-parser';
import morgan from "morgan";
import { passport } from './passport'
const session = require('express-session');
import * as path from 'path';
import { config } from './app.config';
const clientPath = '../client/dist/movie-app/';

// Routes

import { movies } from './routes/movies';
import { googleOauth } from './routes/auth/google-oauth';
import { user } from './routes/auth/user';


const app = express();
const allowedExt = [
	'.js',
	'.ico',
	'.css',
	'.png',
	'.jpg',
	'.woff2',
	'.woff',
	'.ttf',
	'.svg',
];

// https://github.com/auth0/passport-linkedin-oauth2/issues/43

// app.all('/*', (req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   next();
// });

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
		secret: config.session.sessionSecret || 'secret',
		resave: config.session.resave || false, // required
		saveUninitialized: config.session.saveUninitialized || false // required
	})
)

app.use(passport.initialize());
app.use(passport.session());


// log session

// app.use( (req: any, res: any, next: any) => {
//   console.log('req.session', req.session);
//   return next();
// });

// routing

app.use('/api/movies', movies);
app.use('/api/auth/google', googleOauth);
app.use('/api/auth/user', user);

app.use('/static', express.static(path.join(__dirname, clientPath + 'index.html')));
app.get('*', (req, res) => {

	// res.sendFile(path.join(__dirname, clientPath));

	if (allowedExt.filter(ext => req.url.indexOf(ext) > 0).length > 0) {
		req.url = req.url.replace(/\?.*/g, '');

		res.sendFile(path.resolve(__dirname, `${clientPath}${req.url}`));
	} else {
		res.sendFile(path.resolve(__dirname, `${clientPath}index.html`));
	}
});
app.use('/', express.static(path.join(__dirname, clientPath)));

console.log('Redirect url')
console.log(config.production.google.redirect_url)

// Starting Server
app.listen(config.port, () => {
	console.log(`App listening on PORT: ${config.port}`)
})
