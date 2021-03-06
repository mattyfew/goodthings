var express = require('express');
var router = express.Router();

// GET users listing
route.get('/', function (req, res, next) {
	res.send('respond with a resource');
});

router.get('/create', function (req, res, next) {
	var vm = {
		title: 'Create an account'
	};
	res.render('/users/create', vm);
});

router.post('/create', function (req, res, next) {
	userService.addUser(req.body, function (err) {
		if (err) {

			var vm = {
				title: 'Create an account',
				input: req.body,
				error: err
			};
			delete vm.input;
			return res.render('users/create', vm);
		}
		res.redirect('/');
	});
});

router.post('/login', passport.authenticate('local'), function(req,res,next) {
	res.redirect('/');
});
