var Place = require('../models/place');
var Location = require('../models/location');
var Counter = require('../models/counter');
var passport = require('passport');

exports.index = function(req, res, next) {
  var params = req.query;
  Location.getAllLocationsInArea({params}, function(err, locations) {
    res.send({
      locations
    });
  });
}

exports.create = function(req, res, next) {
  Counter.getNextSequenceValue('locationid',function(err, id) {
    var newLocation = new Location({
      _id: id.sequence_value,
      lng: 108.223168,
      lat: 16.081414,
      type_id: 1,
      place: {
        name_place: 'Restaurant',
        detail: 'Madam',
        average_rating: 4,
        direction: 'EA',
        people_rating: 12,
        address: '43 street',
        warning: 0
      }
    });
    Location.createLocation(newLocation, function (err, location){
      if(err) throw err;
    });
  })
}
