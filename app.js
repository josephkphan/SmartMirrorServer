var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var expressValidator = require('express-validator');
var flash = require('connect-flash');
var session = require('express-session');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var mongo = require('mongodb');
var mongoose = require('mongoose');


// Connection to the database
var configDB = require('./config/database.js');
mongoose.Promise = global.Promise;
mongoose.connect(configDB.url);
var db = mongoose.connection;

var routes = require('./routes/index');
var users = require('./routes/users');
var api = require('./routes/api');

// Init App
var app = express();

// View Engine
app.set('views', path.join(__dirname, 'views'));  // We want a folder views to handle our views
app.engine('handlebars', exphbs({defaultLayout:'layout'})); // Default layout file in layout
app.set('view engine', 'handlebars'); // Set view engine to handlebars

// BodyParser Middleware   -  setup code, configurations
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public'))); //stylesheets, imagse, jquery
									// stuff public for users
// Express Session
app.use(session({
    secret: 'secret',		// change change secret to whatever we want
    saveUninitialized: true,
    resave: true
}));

// Passport Init
app.use(passport.initialize());
app.use(passport.session());

// Express Validator
app.use(expressValidator({
  errorFormatter: function(param, msg, value) {
      var namespace = param.split('.')
      , root    = namespace.shift()
      , formParam = root;

    while(namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param : formParam,
      msg   : msg,
      value : value
    };
  }
}));

// Connect Flash
app.use(flash());

// Global Vars - used for our flash messages
app.use(function (req, res, next) {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  res.locals.user = req.user || null;
  next();
});


app.use('/', routes);
app.use('/users', users);
app.use('/api', api);

// Set Port
app.set('port', (process.env.PORT || 3000));

// Starting Server
app.listen(app.get('port'), function(){
	console.log('Server started on port '+app.get('port'));
});
