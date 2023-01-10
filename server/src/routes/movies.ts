import { Router } from 'express';
import { getVideos } from '../3rd-party/controllers/google';
const router = Router();
import { config } from '../app.config';
import { google } from 'googleapis';
const OAuth2 = google.auth.OAuth2;
const oauth2Client = new OAuth2(
    config.google.client_id,
    config.google.client_secret,
    config.google.redirect_url
);



router.get('/', userLogged, async (req: any, res: any) => {
    oauth2Client.credentials = {
        access_token: req.user.access_token
        // refresh_token: req.user.refresh_token
    };

    try {
        const videos = await getVideos(oauth2Client);
        res.json({
            status: "ok",
            data: videos
        });
    } catch (err) {
        console.log(err)
        res.json({
            status: "error"
        });
    }
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