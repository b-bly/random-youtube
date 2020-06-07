const passport = require('passport');
const express = require('express');
const router = express.Router();
const config = require('../../app.config'),
  {google} = require('googleapis'),
  OAuth2 = google.auth.OAuth2;

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

export const user = router;