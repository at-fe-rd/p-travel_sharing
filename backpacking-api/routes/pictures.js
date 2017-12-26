var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/:id', function (req, res, next) {
  res.sendfile(path.resolve(`./uploads/${req.params.id}`));
}); 

module.exports = router;