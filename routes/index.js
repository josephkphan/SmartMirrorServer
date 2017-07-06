var express = require('express');
var router = express.Router();

///////////////////////////////// Index Route///////////////////////////////
router.get('/', ensureAuthenticated, function(req, res){
	console.log(req.user._id);
	console.log(req.user.name);
	console.log(req.user.username);
	res.render('index', req.user);
	//display dashboard
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
