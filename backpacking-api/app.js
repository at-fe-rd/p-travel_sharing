var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var dotenv = require('dotenv').config();
var logger = require('morgan');
var expressValidator = require('express-validator');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var multer = require('multer');
var flash = require('connect-flash');
var mongo = require('mongodb');
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/backpacking-api');
var db = mongoose.connection;
var http = require('http');
var cors = require('cors');
var contact = require('./routes/contact');
var nodemailer = require('nodemailer');
fs = require('fs');
fs.createReadStream('.sample-env').pipe(fs.createWriteStream('.env'));

//route/path
var auth = require('./routes/auth');
var index = require('./routes/index');
var places = require('./routes/places');
var locations = require('./routes/locations');
var posts = require('./routes/posts');
var users = require('./routes/users');
var sessions = require('./routes/sessions');
// app.use('/contact', contact);

//app controller
var AppController = require('./controller/AppController');

var app = express();
app.use(cors({
  // origin: '*',
  // exposedHeaders: ['Access-Token', 'Uid'],
  // credentials: true
}));

const option = {
  service: 'gmail',
  auth: {
      user: 'dhquan1910@gmail.com',
      pass: 'doquan1910'
  }
};

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: 'secret',
  saveUninitialized: true,
  resave: true
}));

//validator
app.use(expressValidator({
  errorFormatte: function(param,msg,value) {
    var namespace = param.split('.'),
    root = namespace.shift(),
    formParam = root;
    while(namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param: formParam,
      msg: msg,
      value: value
    };
  }
}));

// app.get('*', AppController.authorize);

app.use(function(req, res, next) {
  // var allowedOrigins = ['http://127.0.0.1:8020', 'http://localhost:8020', 'http://127.0.0.1:9000', 'http://localhost:9000'];
  // var origin = req.headers.origin;
  // if(allowedOrigins.indexOf(origin) > -1){
  //      res.setHeader('Access-Control-Allow-Origin', origin);
  // }
  // res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:8020');
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Accept");
 
  res.header("Access-Control-Expose-Headers", "Access-Token, Uid, Provider");
  // res.header('Access-Control-Allow-Methods', 'GET, OPTIONS');
  // res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  // res.header('Access-Control-Allow-Headers', 'Asd');
  res.header('Access-Control-Allow-Credentials', true);
  next();
});

//use routes
app.use('/', index);
app.use('/places', places);
app.use('/locations', locations);
app.use('/posts', posts);
app.use('/users', users);
app.use('/sessions', sessions);
app.use('/auth', auth);
// app.use('/contact', contact);

app.use(flash());
app.use(function(req,res,next) {
  res.locals.messages = require('express-messages')(req,res);
  next();
});
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
