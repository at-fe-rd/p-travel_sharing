var express = require('express');
var router = express.Router();
var SessionsController = require('../controller/SessionsController');
var AppController = require('../controller/AppController');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = require('../models/user');
var Auth = require('../models/authentication');

router.get('/show', AppController.authorize, SessionsController.show);

//login
router.post('/', SessionsController.create);

//logout
router.delete('/destroy', SessionsController.destroy);
module.exports = router;