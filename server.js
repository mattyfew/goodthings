var express = require('express'),
		app = express(),
		bodyParser = require('body-parser'),
		config = require('./config'),
		cookieParser = require('cookie-parser'),
		mongoose = require('mongoose'),
		morgan = require('morgan'),
		methodOverride = require('method-override'),
		passport = require('passport'),
		LocalStrategy = require('passport-local').Strategy,
		// passportConfig = require('./auth/passport-config'),
		path = require('path'),
		engine = require('consolidate'),
		routes = require('./app/routes/routes'),
		users = require('./app/routes/users');

// APP CONFIGURATION ==================
// ====================================

// VIEW ENGINE SETUP
app.set('views', path.join(__dirname + '/public'));
app.use(express.static(path.join(__dirname + '/public')));
app.engine('html', engine.ejs)
app.set('view engine', 'html');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application json
app.use(methodOverride());
app.use(cookieParser());
app.use(require('express-session')({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

// uncomment after placing your favicon in /public
// app.use(favicon(__dirname + '/public/favicon.ico'));

// PASSPORT ===========================
// ====================================

var Account = require('./app/models/account');
passport.use(new LocalStrategy(Account.authenticate()));
passport.serializeUser(Account.serializeUser());
passport.deserializeUser(Account.deserializeUser());

// DATABASE ===========================
// ====================================

var db = require('./config/db')
mongoose.connect(db.url);

// ROUTES=======================================
//require('./app/routes/routes')(app);

// Angular Route
app.get('*', function(req, res) {
    res.render(__dirname + '/public/app/index.html')
});

app.listen(config.port, function(){ console.log("Listening on port " + config.port); });

exports = module.exports = app; //expose app
