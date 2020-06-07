import { Router, Response, Request } from 'express';
import { getMovies } from '../database/controller';
import path from 'path';
import { config } from 'process';
import * as fs from 'fs';
export const router = Router();
const {google} = require('googleapis');
// const OAuth2 = google.auth.OAuth2;
const googleConfig = require('../../oauth2.keys.json');

function userLogged(req: any, res: Response, next: any) {
  if (req.isAuthenticated())
      return next();
  res.sendStatus(401)
}

router.get('/', userLogged, async (req: any, res: Response) => {

  if (req.user && req.user.access_token) {

  

  // TODO: move to 3rd.party

    var oauth2Client = new google.auth.OAuth2(
        googleConfig.clientID,
        googleConfig.clientSecret,
        googleConfig.callbackURL
    );

    oauth2Client.credentials = {
        access_token: req.user.access_token,
        refresh_token: req.user.refresh_token
    };

    google.youtube({
        version: 'v3',
        auth: oauth2Client
    }).subscriptions.list({
        part: 'snippet',
        mine: true,
        headers: {}
    }, function(err: Error, data: any, response: Response) {
        if (err) {
            console.error('Error: ' + err);
            res.json({
                status: "error"
            });
        }
        if (data) {
            console.log(data);
            res.json({
                status: "ok",
                data: data
            });
        }
        if (response) {
            console.log('Status code: ' + response.statusCode);
        }
    });
  } else {
    res.redirect('/api/auth/google');
  }

  // const data = await getMovies();
  // res.json(data);
});

// LESSON LEARNED
// if module.exports is used to return the router, there is a type error 
// at app.use in server.ts

// module.exports = <Router>router;