var express = require('express');
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var FacebookStrategy = require('passport-facebook').Strategy;
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var passport = require('passport');
var User = require('../models/user');
var configAuth = require('../config/auth');

// Register
router.get('/register', function(req, res){
	res.render('login');
});

// Login
router.get('/login', function(req, res){
	res.render('login');
});

/////////////////////////////Facebook Route///////////////////////////////////
router.get('/auth/facebook', passport.authenticate('facebook'));
router.get('/auth/facebook/callback',
passport.authenticate('facebook', { successRedirect: '/',
failureRedirect: '/login' }));

//////////////////////////////Google Route////////////////////////////////////
router.get('/auth/google', passport.authenticate('google', {scope: ['profile', 'email']}));
router.get('/auth/google/callback',
passport.authenticate('google', { successRedirect: '/',
failureRedirect: '/login' }));

/////////////////////////////Registration Page//////////////////////////////////
// Register User
router.post('/register', function(req, res){
	var name = req.body.name;
	var mirrorID = req.body.mirrorID;
	var username = req.body.username;
	var password = req.body.password;
	var password2 = req.body.password2;

	// Validation - Checks if user filled out the form correctly
	req.checkBody('name', 'Name is required').notEmpty();
	req.checkBody('mirrorID', 'MirrorID is required').notEmpty();
	req.checkBody('username', 'Username is required').notEmpty();
	req.checkBody('password', 'Password is required').notEmpty();
	req.checkBody('password2', 'Passwords do not match').equals(req.body.password);
	// checks to make sure passwords match and all fields are filled in

	var errors = req.validationErrors();

	if(errors){
		res.render('login',{
			// shows the errors

			errors:errors
		});
	} else {
		// account created successful! creating new user data structure
		var newUser = new User({
			name: name,
			mirrorID:mirrorID,
			username: username,
			password: password,

            google_distance_matrix_key: 'google_distance_matrix_key',
            google_geocode_key: 'google_geocode_key',
            dark_sky_weather_key: 'dark_sky_weather_key',

            maps_origin_street_address : 'street',
            maps_origin_city_address : 'city',
            maps_origin_state_address : 'state initials',

            maps_destination_street_address : 'street',
            maps_destination_city_address : 'city',
            maps_destination_state_address : 'state initials',

            maps_settings_avoid_tolls : false,
            maps_settings_mode : String,
            maps_settings_transit_mode : String,

            color: 'yellow',    //TODO This should be the default value?
            fontSize: 'medium',  //TODO Same? ^

			to_do_list: 'a////b////c',
			stocks: ''

			//TODO Make this the default for facebook and other one too
		});

		User.createUser(newUser, function(err, user){
			if(err) throw err;
			console.log(user);
		});

		req.flash('success_msg', 'You are registered and can now login');

		res.redirect('/users/login');
	}
});
/////////////////////////////Serialization ///////////////////////////////////

passport.serializeUser(function(user, done) {
	done(null, user.id);
});

passport.deserializeUser(function(id, done) {
	User.getUserById(id, function(err, user) {
		done(err, user);
	});
});

////////////////////////////Login Strategies//////////////////////////////////
// Local Login - Users created their own account from our website
passport.use(new LocalStrategy(
	function(username, password, done) {
		// Checks if user info is correct
		User.getUserByUsername(username, function(err, user){
			// Checks username
			if(err) throw err;
			if(!user){
				// Wasn't found. display error message
				return done(null, false, {message: 'Incorrect Username or Password'});
			}
			//Check password for correct username
			User.comparePassword(password, user.password, function(err, isMatch){
				if(err) throw err;
				if(isMatch){
					// Success! get the user
					const util = require('util');
					console.log(util.inspect(user, false, null));
					return done(null, user);
				} else {
					// Failed! display error message
					return done(null, false, {message: 'Incorrect Username or Password'});
				}
			});
		});
	}));

// Facebook Login
passport.use(new FacebookStrategy({
	// Passing in API Keys
	clientID: configAuth.facebookAuth.clientID,
	clientSecret: configAuth.facebookAuth.clientSecret,
	callbackURL: configAuth.facebookAuth.callbackURL},
	function(accessToken, refreshToken, profile, done) {
		process.nextTick(function(){
			User.findOne({'facebook.id': profile.id}, function(err, user){
				// Checks whether user used his login for facebook already
				if(err)
					// got an error
					return done(err);
				if(user)
					// got back the user
					return done(null, user);
				else {
					// Create a new User
					var newUser = new User();
					newUser.facebook.id = profile.id;
					newUser.facebook.token = accessToken;
					newUser.facebook.name = profile.displayName+ ' ' + profile.name.familyName;
					newUser.name = profile.displayName+ ' ' + profile.name.familyName;

					User.createUser(newUser, function(err, user){
						if(err) throw err;
						console.log(user);
					});
					console.log(profile);
				}
			});
		});
	}
));

// Google Logn
passport.use(new GoogleStrategy({
	// Get the API Keys
	clientID: configAuth.googleAuth.clientID,
	clientSecret: configAuth.googleAuth.clientSecret,
	callbackURL: configAuth.googleAuth.callbackURL },
	function(accessToken, refreshToken, profile, done) {
		process.nextTick(function(){
			User.findOne({'google.id': profile.id}, function(err, user){
				if(err)
					// error
					return done(err);
				if(user)
					// user found! return user
					return done(null, user);
				else {
					// first time login with google account
					var newUser = new User();
					newUser.google.id = profile.id;
					newUser.google.token = accessToken;
					newUser.google.name = profile.displayName;
					newUser.name = profile.displayName+ ' ' + profile.name.familyName;

					User.createUser(newUser, function(err, user){
						if(err) throw err;
						console.log(user);
					});
					console.log(profile);
				}
			});
		});
	}
));

/////////////////////////////Login Route////////////////////////////////////////
router.post('/login',
passport.authenticate('local', {successRedirect:'/', failureRedirect:'/users/login',failureFlash: true}),
function(req, res) {
	console.log(util.inspect(res));
	res.redirect('/');
});

////////////////////////////Log out Route////////////////////////////////
router.get('/logout', function(req, res){
	req.logout();

	req.flash('success_msg', 'You are logged out');

	res.redirect('/users/login');
});

module.exports = router;

//------------------------------ Test Code -------------------------------------
// const util = require('util')

// alternative shortcut
// console.log(util.inspect(newUser, false, null));
// console.log(util.inspect(User.User, false, null));

// var newUser = new User(); // Create a new User
// newUser.name = "Joseph K Phan"
// User.createUser(newUser, function(err, user){
//     if(err) throw err;
//     console.log(user);
// });
//
// User.addToDoListItem(newUser, "Demo", function(err, user) {
// 	if (err) console.log("error :(");
// 	console.log(user);
// });
