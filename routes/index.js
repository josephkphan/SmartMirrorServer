var express = require('express');
var router = express.Router();

///////////////////////////////// Index Route///////////////////////////////
router.get('/', ensureAuthenticated, function(req, res){
	res.render('index');
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
