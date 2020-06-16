let env: string = 'development';
if (process.env.NODE_ENV === 'production') {
  env = 'production';
}

const genConfig: any = {
  "session": {
    "sessionSecret": process.env.SESSION_SECRET,
    "resave": false,
    "saveUninitialized": false
  },
  "google": {
    "client_id": process.env.CLIENT_ID,
    "client_secret": process.env.CLIENT_SECRET,
    "redirect_url": process.env.REDIRECT_URL
  },
  port: process.env.PORT || 8080
};

const devConfig: any = {
  client: 'http://localhost:8080/'
}

const prodConfig: any = {
  client: 'https://random-youtube.herokuapp.com/'
}

const envConfig: any = {
  development: {
    ...genConfig,
    ...devConfig
  },
  production: {
    ...genConfig,
    ...prodConfig
  }
};

export const config = envConfig[env];