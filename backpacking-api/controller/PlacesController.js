var Auth = require('../models/authentication');
var passport = require('passport');
var Place = require('../models/place');
var Location = require('../models/location');

exports.show = function(req, res, next) {
  var id = req.params.id;
  console.log(res.locals);
  Location.getLocationDetail(id, function(err, place) {
    console.log(place);
    res.send({
      place
    });
  });
}
