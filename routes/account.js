var express = require('express');
var router = express.Router();
var database_manager = require('../model/database_manager');
var sql = require('../model/sql');
var constants = require('../util/constants')
var crypto = require('crypto');

// Direct to register page
router.get('/register', function(req, res, next) {
  	res.render('register', { message: ''});
});

// Execute register function
router.post('/register', function(req, res, next){
	console.log(req.body);
	var user_type = '';
	// Check if user_id is exist
	database_manager.query(sql.check_user_id, [req.body.user_id], function(err, rows){
		console.log(sql.check_user_id);
		console.log(rows);
		if(rows.length != 0){
			// if exist
			res.render('register', { message: 'User ID is already exist'});
		}else{
			// if not
			// get the user type
			user_type = req.body.user_type;
			if(req.body.user_type == 'other'){
				user_type = 'participant' + req.body.otherType;
			}

			// insert user information into database
			database_manager.query(sql.register, [req.body.user_id, req.body.password, user_type], function(err, rows){
				// set cookie
				console.log(sql.register);
				console.log(rows);
				res.cookie('user_id', req.body.user_id, {maxAge: 60 * 60 * 1000});
				res.cookie('user_type', user_type, {maxAge: 60 * 60 * 1000});
				var sha1 = crypto.createHash('sha1');
				sha1.update(req.body.user_id);
				sha1.update(user_type);
				sha1.update(constants.secret);
				res.cookie('value', sha1.digest('hex'), {maxAge: 60 * 60 * 1000});
				res.redirect('/');
			});
		}
	});

	
});

// Direct to login page
router.get('/login', function(req, res, next) {
    res.render('login', {message: ''});
});

// Execute login function
router.post('/login', function(req, res, next) {
	console.log(req.body);
	// search user in database
  	database_manager.query(sql.login, [req.body.user_id, req.body.password], function(err, rows){
		console.log(sql.login);
		console.log(rows);
		// if found user
		if(rows.length == 1){
			// set cookie
			res.cookie('user_id', req.body.user_id, {maxAge: 60 * 60 * 1000});
			res.cookie('user_type', rows[0].role, {maxAge: 60 * 60 * 1000});
			var sha1 = crypto.createHash('sha1');
			sha1.update(req.body.user_id);
			sha1.update(rows[0].role);
			sha1.update(constants.secret);
			res.cookie('value', sha1.digest('hex'), {maxAge: 60 * 60 * 1000});
			res.redirect('/');	
		}else{
			// if not
			res.render('login', {message: 'User is not exist or Password is wrong'});
		}
	});
});

// Logout
router.get('/logout', function(req, res, next){
	res.clearCookie('user_id');
	res.clearCookie('user_type');
	res.clearCookie('value');
	res.render('login', {message: ''})
});

module.exports = router;
