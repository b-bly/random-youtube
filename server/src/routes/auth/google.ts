const passport = require('passport');
import { Router, Request, Response } from 'express';
export const router = Router();

/* GET Google Authentication API. */
router.get(
  "/",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/", session: false }),
  function(req: any, res: any) {
      var token = req.user.token;
      console.log('token');
      console.log(token);
      res.redirect("http://localhost:4200?token=" + token);
  }
);