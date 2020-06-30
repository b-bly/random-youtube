# Random Youtube

An app that displays a random selection of videos from the user's YouTube playlists.
[http://random-youtube.herokuapp.com/](http://random-youtube.herokuapp.com/)

## Setup

Make a .env file in the ./server directory similar to .env.example and put in values.
Go to your [Google Developer's Console](https://console.developers.google.com/)
Click edit for Oauth 2.0 Client Ids
And enter authorized javascript origins urls:
For dev, mine was: 
http://localhost:4200
For prod, put in the deployed url.  I deployed my app to [Heroku](https://www.heroku.com "Heroku's Homepage").  Mine was 
https://random-youtube.herokuapp.com

Enter authorized redirect uris: 
dev: 
http://localhost:4200/api/auth/google/callback
prod: 
https://random-youtube.herokuapp.com/api/auth/google/callback

## Getting Started

### Prerequisites

- A package manager like [npm](https://www.npmjs.com/)
- [Node.js](https://nodejs.org/en/)
- [Angular Cli](https://cli.angular.io/)


### Installing

Run these commands in the terminal:

```
npm install

npm run dev
```

Open a new terminal tab and start the server by running

```
cd server

npm run dev
```

The app should automatically open in a browser at the url: localhost:3000

### Completed Features

- [x] Sign in with Google
- [x] Request playlists and videos from YouTube
- [x] Make a random selection of a user's videos.
- [x] Display video thumbnails.
- [x] Play a video when clicked.

### Next Steps

- [ ] Autoplay next video.

## Built With

Anuglar 9, Node.js, Express.

## Author

Brendt Bly

## Acknowledgments

Although this tutorial is for React, it was helpful to see how to set up calling the OAuth endpoint on the server from
an <a> tag.

https://hackernoon.com/m-e-r-n-stack-application-using-passport-for-authentication-920b1140a134
