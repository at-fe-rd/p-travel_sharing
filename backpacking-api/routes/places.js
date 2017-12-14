var express = require('express');
var router = express.Router();
var PlacesController = require('../controller/PlacesController');

router.get('/:id', PlacesController.show)

module.exports = router;
