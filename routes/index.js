var express = require('express');
var router = express.Router();
var User = require('../models/user');
var path = require('path');

///////////////////////////////// Index Route///////////////////////////////
router.get('/', ensureAuthenticated, function(req, res){
	console.log(req.user._id);
	console.log(req.user.name);
	console.log(req.user.username);
	res.render('index', req.user);
	// res.sendFile(path.join(__dirname + '/home.html'));
	//display dashboard
});

router.post('/', function(req, res) {
	req.flash('success_msg', 'Updated Profile');


	res.redirect('/');

	User.updateUser(req.body);


	// Create the new user with updated information
	// var newUser = new User({
	// 	_id: req.body._id,
	// 	name: req.body.new_name
	// });
    //
	// User.createUser(newUser, function(err, user){
	// 	if(err) throw err;
	// 	console.log(user);
	// });

	// var name = req.body.name;
	// var mirrorID = req.body.mirrorID;
	// var username = req.body.username;
	// var password = req.body.password;
	// var password2 = req.body.password2;
    //
	// // Validation - Checks if user filled out the form correctly
	// req.checkBody('name', 'Name is required').notEmpty();
	// req.checkBody('mirrorID', 'MirrorID is required').notEmpty();
	// req.checkBody('username', 'Username is required').notEmpty();
	// req.checkBody('password', 'Password is required').notEmpty();
	// req.checkBody('password2', 'Passwords do not match').equals(req.body.password);
	// // checks to make sure passwords match and all fields are filled in
    //
	// var errors = req.validationErrors();
    //
	// if(errors){
	// 	res.render('register',{
	// 		// shows the errors
	// 		errors:errors
	// 	});
	// } else {
	// 	// account created successful! creating new user data structure
	// 	var newUser = new User({
	// 		name: name,
	// 		mirrorID:mirrorID,
	// 		username: username,
	// 		password: password
	// 	});
    //
	// 	User.createUser(newUser, function(err, user){
	// 		if(err) throw err;
	// 		console.log(user);
	// 	});
    //
	// 	req.flash('success_msg', 'You are registered and can now login');
    //
	// 	res.redirect('/users/login');
	// }
});

// Redirects user if they arent authenticated to login page
function ensureAuthenticated(req, res, next){
	if(req.isAuthenticated()){
		return next();
	} else {
		//req.flash('error_msg','You are not logged in');
		res.redirect('/users/login');
	}
}

module.exports = router;
