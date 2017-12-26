var express = require('express');
var router = express.Router();
var AppController = require('../controller/AppController');
var User = require('../models/user');
var CommentsController = require('../controller/CommentsController');

//get comments
router.get('/', CommentsController.index);

//create comments
router.post('/', AppController.authorize, CommentsController.create);

//delete comments
// router.delete('/:id', AppController.authorize, CommentsController.destroy);

module.exports = router;