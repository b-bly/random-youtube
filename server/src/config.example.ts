export const appConfig = {
  "development": {
    "session": {
      "sessionSecret": "",
      "resave": false,
      "saveUninitialized": false
    },
    "google": {
      "client_id": "",
      "client_secret": "",
      "redirect_url": ""
    }
  },
  production: {
    "session": {
      "sessionSecret": process.env.SESSION_SECRET,
      "resave": false,
      "saveUninitialized": false
    },
    "google": {
      "client_id": process.env.CLIENT_ID,
      "client_secret": process.env.CLIENT_SECRET,
      "redirect_url": process.env.REDIRECT_URL
    }
  }
};