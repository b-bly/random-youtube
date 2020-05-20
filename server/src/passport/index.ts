const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
import * as fs from 'fs';
import * as path from 'path';
// import { google } from 'googleapis';

// Google API clientID, clientSecret, etc. set up at https://console.developers.google.com/

const keyPath = path.join(__dirname, 'oauth2.keys.json');
let googleConfig: any = {redirect_uris: ['']};
if (fs.existsSync(keyPath)) {
  googleConfig = require(keyPath);
}

passport.serializeUser(function(user: any, done: any) {
  done(null, user);
 });

 passport.deserializeUser(function(user: any, done: any) {
  done(null, user);
 });

 passport.use(
  new GoogleStrategy(
   {
    clientID: googleConfig.clientId,
    clientSecret: googleConfig.clientSecret,
    callbackURL: googleConfig.redirect
   },
   function(accessToken: any, refreshToken: any, profile: any, done: any) {
    var userData = {
     email: profile.emails[0].value,
     name: profile.displayName,
     token: accessToken
    };
    done(null, userData);
   }
  )
 );