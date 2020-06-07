import { Router, Response, Request } from 'express';
import { getMovies } from '../database/controller';
import path from 'path';
import * as fs from 'fs';
const router = Router();
const config = require('../config'),
    { google } = require('googleapis'),
    OAuth2 = google.auth.OAuth2;



router.get('/', userLogged, async (req: any, res: any) => {

    var oauth2Client = new OAuth2(
        config.clientID,
        config.clientSecret,
        config.callbackURL
    );

    oauth2Client.credentials = {
        access_token: req.user.access_token
        // refresh_token: req.user.refresh_token
    };

    // playlists

    await google.youtube({
        version: 'v3',
        auth: oauth2Client
    }).playlists.list({
        part: 'snippet',
        mine: true,
        headers: {}
    }, async (err: Error, data: any, response: any) => {
        if (err) {
            console.error('Error: ' + err);
            res.json({
                status: "error"
            });
        }
        if (data) {

            const id = data.data.items[0].id;

            // first playlist

            await google.youtube({
                version: 'v3',
                auth: oauth2Client
            }).playlistItems.list({
                playlistId: id,
                part: 'snippet',
                mine: true,
                headers: {}
            }, function (err: Error, data: any, response: any) {
                if (err) {
                    console.error('Error: ' + err);
                    res.json({
                        status: "error"
                    });
                }
                if (data) {

                    res.json({
                        status: "ok",
                        data: data
                    });
                }
                if (response) {
                    console.log('Status code: ' + response.statusCode);
                }

            })
        }
    });
});

function userLogged(req: any, res: any, next: any) {
    if (req.isAuthenticated())
        return next();
    res.json({ loggedIn: false });
}


// LESSON LEARNED
// if module.exports is used to return the router, there is a type error 
// at app.use in server.ts

// module.exports = <Router>router;

export const movies = router;