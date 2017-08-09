var express = require('express');
var router = express.Router();
var User = require('../models/user');
var path = require('path');

// Index Page
router.get('/', ensureAuthenticated, function(req, res){
    console.log(req.user._id);
    console.log(req.user.name);
    console.log(req.user.username);
    res.render('home', req.user);
    // res.sendFile(path.join(__dirname + '/home.html'));
    //display dashboard
});

router.post('/', function(req, res) {
    req.flash('success_msg', 'Updated Profile');
    res.redirect('/');
    User.updateUser(req.body);

});

//Home
router.get('/home', ensureAuthenticated, function(req, res){
    console.log(req.user._id);
    console.log(req.user.name);
    console.log(req.user.username);
    res.render('home', req.user);
});

router.post('/home', function(req, res) {
    req.flash('success_msg', 'Updated Stocks & Reminders');
    res.redirect('/home');
    User.updateUser(req.body);
});

//User
router.get('/user', ensureAuthenticated, function(req, res){
    console.log(req.user._id);
    console.log(req.user.name);
    console.log(req.user.username);
    res.render('user', req.user);
});

router.post('/user', function(req, res) {
    req.flash('success_msg', 'Updated Profile');
    res.redirect('/user');
    User.updateUser(req.body);
});

//Maps
router.get('/maps', ensureAuthenticated, function(req, res){
    console.log(req.user._id);
    console.log(req.user.name);
    console.log(req.user.username);
    res.render('maps', req.user);
});

router.post('/maps', function(req, res) {
    req.flash('success_msg', 'Updated Location');
    res.redirect('/maps');
    User.updateUser(req.body);
});

//Api Keys
router.get('/apikeys', ensureAuthenticated, function(req, res){
    console.log(req.user._id);
    console.log(req.user.name);
    console.log(req.user.username);
    res.render('apikeys', req.user);
});

router.post('/apikeys', function(req, res) {
    req.flash('success_msg', 'Updated Api Keys');
    res.redirect('/apikeys');
    User.updateUser(req.body);

});

//Settings Page
router.get('/settings', ensureAuthenticated, function(req, res){
    console.log(req.user._id);
    console.log(req.user.name);
    console.log(req.user.username);
    res.render('settings', req.user);
});

router.post('/', function(req, res) {
    req.flash('success_msg', 'Updated Settings');
    res.redirect('/');
    User.updateUser(req.body);

});

// Support Page
router.get('/support', ensureAuthenticated, function(req, res){
    console.log(req.user._id);
    console.log(req.user.name);
    console.log(req.user.username);
    res.render('support', req.user);
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
