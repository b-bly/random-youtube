const passport = require('passport');
import { Router, Request, Response } from 'express';
const router = Router();

/* GET Google Authentication API. */
router.get(
  "/",
  passport.authenticate("google", { scope: ["profile", "email", 'https://www.googleapis.com/auth/youtube.readonly'] })
);

router.get(
  "/callback",
  passport.authenticate("google", { failureRedirect: "/api/auth/google", session: true }),
  (req: any, res: any) => {

    res.redirect("http://localhost:4200?token=" + req.user.access_token);

    // express sessions will attach session id to response automatically, so no need to attach the token
    // as a jwt on client side

    // callback = http://app.movie.com:4200/  did NOT work.  "Invalid headers".  Needed to put
    // localhost in for callback or deploy server
  }
);

export const googleOauth = router;