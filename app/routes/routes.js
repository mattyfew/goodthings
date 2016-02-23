var express = require('express');
var passport = require('passport');
var Account = require('../models/account');
var router = express.Router();

module.exports = function(app, passsport) {

  // router.get('/register', function(req, res) {
  //     res.render('register', { });
  // });
  //
  // router.post('/register', function(req, res) {
  //     Account.register(new Account({ username : req.body.username }), req.body.password, function(err, account) {
  //         if (err) {
  //             return res.render('register', { account : account });
  //         }
  //
  //         passport.authenticate('local')(req, res, function () {
  //             res.redirect('/');
  //         });
  //     });
  // });

  // router.get('/login', function(req, res) {
  //     res.render('login', { user : req.user });
  // });
  //
  // router.post('/login', passport.authenticate('local'), function(req, res) {
  //     res.redirect('/');
  // });
  //
  // router.get('/logout', function(req, res) {
  //     req.logout();
  //     res.redirect('/');
  //});

  router.get('/ping', function(req, res){
    console.log("pong!")
      res.status(200)
  });

  module.exports = router;


	// SERVER ROUTES ===========================================================
  // =========================================================================

// 	var apiRouter = express.Router();
//
// 	// middleware to use for all requests
// 	apiRouter.use(function(req, res, next) {
// 		// do logging
// 		console.log('Something is happening.');
// 		next();
// });
//
// 	// test route
// 	apiRouter.get('/', function(req,res) { res.json('test route is working!'); });

	// // products routes
	// apiRouter.route('/products')
  //
	// 	// POST new product
	// 	.post(function(req,res) {
	// 		var product = new Product;
	// 		product.name = req.body.name;
	// 		product.save(function(err) {
	// 			if(err) res.send(err);
	// 			res.json({message: 'Product created!'});
	// 		});
	// 	})
  //
	// 	//GET all products
	// 	.get(function(req,res) {
	// 		Product.find(function(err, products) {
	// 			if(err) res.send(err);
	// 			res.json(products); //return all products in JSON format
	// 		});
	// 	});
  //
	// // products/:product_id routes
	// apiRouter.route('/products/:product_id')
  //
	// 	//GET product with id
	// 	.get(function(req,res) {
	// 		Product.findById(req.params.product_id, function(err, product) {
	// 			if(err) res.send(err);
	// 			res.json(product);
	// 		});
	// 	})
  //
	// 	.put(function(req,res) {
	// 		Product.findById(req.params.product_id, function(err,product) {
	// 			if(err) res.send(err);
	// 			product.name = req.body.name; // update info (will need to add more attributes)
	// 			product.save(function(err) {
	// 				if(err) res.send(err);
	// 				res.json({ message: 'Product updated!'});
	// 			});
	// 		});
	// 	})
  //
	// 	.delete(function(req,res) {
	// 		Product.remove({_id: req.params.product_id}, function(err, product) {
	// 			if(err) res.send(err);
	// 			res.json({message: 'Successfully deleted'});
	// 		});
	// 	});

	// app.use('/api', apiRouter);


  // ==========================================
  //              Error Handeling
  // ==========================================

  // catch 404 and forward to error handler
  app.use(function(req, res, next) {
      var err = new Error('Not Found');
      err.status = 404;
      next(err);
  });

  // development error handler - will print stacktrace
  if (app.get('env') === 'development') {
      app.use(function(err, req, res, next) {
          res.status(err.status || 500);
          res.render('error', {
              message: err.message,
              error: err
          });
      });
  }

  // production error handler - no stacktraces leaked to user
  app.use(function(err, req, res, next) {
      res.status(err.status || 500);
      res.render('error', {
          message: err.message,
          error: {}
      });
  });

	// route to handle creating goes here (app.post)
	// route to handle delete goes here (app.delete)

  // exports.index = function(req,res) {
  //   res.sendfile(__dirname + "/public/app/views/index.html");
  // }


};
