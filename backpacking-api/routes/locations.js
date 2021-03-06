var express = require('express');
var router = express.Router();
var Place = require('../models/place');
var Location = require('../models/location');
var Counter = require('../models/counter');
/* GET placeslisting. */
router.get('/place', function(req, res, next) {
  var params = req.query;
  Location.getLocationDetail( {params}, function(err, place) {
    res.send({
      place
    });
  });
});

router.get('/', function(req, res, next) {
  var params = req.query;
  Location.getAllLocationsInArea({params}, function(err, locations) {
    res.send({
      locations
    });
  });
});



router.post('/', function(req,res,next){
  Counter.getNextSequenceValue('locationid',function(err, id) {
    var newLocation = new Location({
      _id: id.sequence_value,
      lng: 108.223168,
      lat: 16.081414,
      type_id: 1
    });
    Location.createLocation(newLocation, function (err, location){
      if(err) throw err;
      var newPlace = new Place({
        name_place: 'Restaurant',
        detail: 'Madam',
        average_rating: 4,
        direction: 'EA',
        people_rating: 12,
        address: '43 street',
        warning: 0,
        location_id: location._id
      });
      Place.createPlace(newPlace, function(err, place) {
        if(err) throw err;
      });
    });
  });
})

module.exports = router;
