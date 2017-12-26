var express = require('express');
var router = express.Router();
var AppController = require('../controller/AppController');
var RelationShipController = require('../controller/RelationShipController');

//create relationship
router.post('/', AppController.authorize, RelationShipController.create);

//block relationship
// router.delete('/destroy', AppController.authorize, RelationShipController.destroy);

module.exports = router;