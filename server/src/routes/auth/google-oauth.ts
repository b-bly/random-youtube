const passport = require('passport');
import { Router } from 'express';
const router = Router();
import { config } from '../../app.config';

/* GET Google Authentication API. */
router.get(
  "/",
  passport.authenticate("google", { scope: ["profile", "email", 'https://www.googleapis.com/auth/youtube.readonly'] })
);

router.get(
  "/callback",
  passport.authenticate("google", { failureRedirect: "/api/auth/google", session: true }),
  (req: any, res: any) => {
    const url = `${config.client}?token=${req.user.access_token}`;
    console.log(url);
    res.redirect(url);

    // express sessions will attach session id to response automatically, so no need to attach the token
    // as a jwt on client side

    // callback = http://app.movie.com:4200/  did NOT work.  "Invalid headers".  Needed to put
    // localhost in for callback or deploy server
  }
);

export const googleOauth = router;