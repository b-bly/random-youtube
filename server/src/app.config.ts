const env = process.env.NODE_ENV || 'development';
// const rawConfig = require('./config.json');
import * as rawConfig from './config.json';
const envConfig = (rawConfig as any)[env];
if (process.env.NODE_ENV === "production") {
  envConfig.session.sessionSecret = process.env.SESSION_SECRET;
  envConfig.client_id = process.env.CLIENT_ID;
  envConfig.client_secret = process.env.CLIENT_SECRET;
  envConfig.redirect_url = process.env.REDIRECT_URL;
}
export const config = envConfig;