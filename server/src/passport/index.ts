export const passport = require("passport");
const googleOauth = require("passport-google-oauth");
const GoogleStrategy = googleOauth.OAuth2Strategy;
import { config } from '../app.config';
const googleConfig = config.google;

passport.serializeUser((user: any, done: any) => {
  done(null, user);
 });

 passport.deserializeUser(function(user: any, done: any) {
  done(null, user);
 });

passport.use(
  new GoogleStrategy(
    {
      clientID: googleConfig.client_id,
      clientSecret: googleConfig.client_secret,
      callbackURL: googleConfig.redirect_url
    },
    (accessToken: string, refreshToken: string, profile: any, done: any) => {
      const userData = {
        email: profile.emails[0].value,
        name: profile.displayName,
        _id: profile.id,
        access_token: accessToken,
        refresh_token: refreshToken,
      };
      done(null, userData);
    }
  )
);