var express = require('express');
var router = express.Router();
var SessionsController = require('../controller/SessionsController');
var AuthController = require('../controller/AuthController')

router.get('/facebook', AuthController.facebook);

module.exports = router;