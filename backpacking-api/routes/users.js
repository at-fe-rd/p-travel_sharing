var express = require('express');
var router = express.Router();
var UserValidation = require('../validation/UserValidation'),
    UserSchema = require('../models/user'),
    UsersController = require('../controller/UsersController')

router.get('/', function(req, res, next){
    console.log(process.env.HOST);
});

router.post('/', UserValidation.validate, UsersController.create);

module.exports = router;
