const express = require('express');
const router = express.Router();
import { google } from 'googleapis';
// const google = require('googleapis'),
const OAuth2 = google.auth.OAuth2;

/* GET Google Authentication API. */
router.get(
  '/',
  (req: any, res: any) => {
    if (req.isAuthenticated()) {
      res.json({ name: req.user.name, loggedIn: true });


    } else {
      // send status: not authenticated or redirect
      res.json({ loggedIn: false });
    }
  }
);

router.post(
  'logout',
  (req: any, res: any) => {
    req.logout();
    res.sendStatus(200);
  }
)

export const user = router;