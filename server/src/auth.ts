import * as fs from 'fs';
import * as path from 'path';
import { google } from 'googleapis';

const keyPath = path.join(__dirname, 'oauth2.keys.json');
let googleConfig: any = {redirect_uris: ['']};
if (fs.existsSync(keyPath)) {
  googleConfig = require(keyPath);
}

console.log('keys:');
console.log(googleConfig);

const defaultScope = [
  'https://www.googleapis.com/auth/plus.me',
  'https://www.googleapis.com/auth/userinfo.email',
];

function createConnection() {
  return new google.auth.OAuth2(
    googleConfig.clientId,
    googleConfig.clientSecret,
    googleConfig.redirect
  );
}

function getConnectionUrl(auth) {
  return auth.generateAuthUrl({
    access_type: 'offline',
    prompt: 'consent', // access type and approval prompt will force a new refresh token to be made each time signs in
    scope: defaultScope
  });
}

/**
 * Create the google url to be sent to the client.
 */
export function urlGoogle() {
  const auth = createConnection(); // this is from previous step
  const url = getConnectionUrl(auth);
  return url;
}