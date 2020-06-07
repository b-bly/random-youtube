const passport = require('passport');
import { Router, Request, Response } from 'express';
export const router = Router();

/* GET Google Authentication API. */
router.get(
  "/",
  passport.authenticate("google", { scope: ["profile", "email", 'https://www.googleapis.com/auth/youtube.readonly'] })
);

router.get(
  "/callback",
  passport.authenticate("google", { failureRedirect: "/api/auth/google", session: false }),
  function(req: any, res: any) {

      console.log(req.user);

      res.redirect("http://localhost:4200?token=" + req.user.access_token);

      // if I have the token here, can't I just pass it back in res.json instead of a redirect?

      // http://app.movie.com:4200/ as callback DID NOT work.  "Invalid headers".  Needed to put
      // localhost in for callback

      // This will provide an object with the access_token and refresh_token.
      // Save these somewhere safe so they can be used at a later time.

      // const {tokens} = await oauth2Client.getToken(token)
      // oauth2Client.setCredentials(tokens);
  }
);