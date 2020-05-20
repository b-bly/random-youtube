const User = require('../database/models/user')
const LocalStrategy = require('passport-local').Strategy

export const strategy = new LocalStrategy(
	{
		usernameField: 'username' // not necessary, DEFAULT
	},
	function(username: string, password: string, done: any) {
    
    // replace with pg

		User.findOne({ username: username }, (err: Error, user: any) => {
			if (err) {
				return done(err)
			}
			if (!user) {
				return done(null, false, { message: 'Incorrect username' })
			}
			if (!user.checkPassword(password)) {
				return done(null, false, { message: 'Incorrect password' })
			}
			return done(null, user)
		})
	}
);