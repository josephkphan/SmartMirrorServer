var express = require('express');
var router = express.Router();
var User = require('../models/user');
var path = require('path');

// ------------------------- Index Page -------------------------
router.get('/', ensureAuthenticated, function(req, res) {
    console.log('Load Index Page');
    res.render('home', req.user); // TODO: Shouldn't the user be redirected to home instead of rendered home??
});

router.post('/', function(req, res) {
    req.flash('success_msg', 'Updated Stocks & Reminders'); // TODO: Flash is not working properly. Creates extra space on top of screen
    User.updateUser(req.body);
    res.redirect('/home');
});

// ------------------------- Home Page -------------------------
router.get('/home', ensureAuthenticated, function(req, res) {
    res.render('home', req.user);
});

router.post('/home', function(req, res) {
    req.flash('success_msg', 'Updated Stocks & Reminders');
    User.updateUser(req.body);
    res.redirect('/home');
});

// ------------------------- User Page -------------------------
router.get('/user', ensureAuthenticated, function(req, res) {
    console.log('Load User Profile Page');
    res.render('user', req.user);
});

router.post('/user', function(req, res) {
    req.flash('success_msg', 'Updated Profile');
    console.log('** Post User Profile Page');
    res.redirect('/user');
    User.updateUser(req.body);
});

// ------------------------- Maps Page -------------------------
router.get('/maps', ensureAuthenticated, function(req, res) {
    console.log('Load Maps Page');
    res.render('maps', req.user);
});

router.post('/maps', function(req, res) {
    req.flash('success_msg', 'Updated Location');
    console.log('** Post Maps Page');
    res.redirect('/maps');
    User.updateUser(req.body);
});

// ------------------------- API Keys Page -------------------------
router.get('/apikeys', ensureAuthenticated, function(req, res) {
    console.log('Load Api Keys Page');
    res.render('apikeys', req.user);
});

router.post('/apikeys', function(req, res) {
    req.flash('success_msg', 'Updated Api Keys');
    console.log('** Post Api Keys Page');
    res.redirect('/apikeys');
    User.updateUser(req.body);
});

// ------------------------- Settings Page -------------------------
router.get('/settings', ensureAuthenticated, function(req, res) {
    console.log('Load Settings Page');
    res.render('settings', req.user);
});

router.post('/settings', function(req, res) {
    req.flash('success_msg', 'Updated Settings');
    console.log('** Post Settings Page');
    res.redirect('/settings');
    User.updateUser(req.body);
});

// ------------------------- Support Page -------------------------
router.get('/support', ensureAuthenticated, function(req, res) {
    res.render('support', req.user);
});


// ------------------------- Helper Functions -------------------------
// Redirects user if they aren't authenticated to login page
function ensureAuthenticated(req, res, next) {
	if(req.isAuthenticated()) {
		return next();
	} else {
		//req.flash('error_msg','You are not logged in');
		res.redirect('/users/login');
	}
}

module.exports = router;
