var express = require('express');
var router = express.Router();
var constants = require('../util/constants')
var crypto = require('crypto');

// Home page
router.get('/', function(req, res, next) {
	// Check if user already loged in
	if(!req.cookies.user_id || !req.cookies.user_type || !req.cookies.value){
		res.redirect('/account/login');
		return;
	}
	// Check if cookie is changed. 
	var sha1 = crypto.createHash('sha1');
	sha1.update(req.cookies.user_id);
	sha1.update(req.cookies.user_type);
	sha1.update(constants.secret);
	var tmp = sha1.digest('hex');
	// If changed, user need to login.
	if(tmp != req.cookies.value){
		res.redirect('/account/login');
	}
	// Show different message base on user type(participant A, B, C....)
	else if(req.cookies.user_type == 'participantA'){
		res.render('index', { message: 'Welcome to Goldironhacks.' });
	}
  	else if(req.cookies.user_type == 'participantB'){
  		res.render('index', { message: 'Welcome to Blackironhacks' });
  	}else{
  		// Show random message to user who isn't A or B
  		random = Math.floor(Math.random() * 10);
  		if(random % 2 == 0){
  			res.render('index', { message: 'Welcome to Goldironhacks.' });
  		}else{
  			res.render('index', { message: 'Welcome to Blackironhacks' });
  		}
  	}
});

module.exports = router;
