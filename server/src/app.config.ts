export const config = {
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

