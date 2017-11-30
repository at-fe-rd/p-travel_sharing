var express = require('express');
var router = express.Router();
var Place = require('../models/place');
var Location = require('../models/location');



/* GET place detail. */
router.get('/detail', function(req, res, next) {
  var params = req.query;
  Place.getPlaceDetail( {params}, function(err, place) {
    res.send({
      place
    });
  });
});

router.post('/', function(req,res,next){
  var newPlace = new Place({
    name_place: 'Khong phai123123',
    detail: '123123',
    average_rating: 4,
    direction: 'East sotuh',
    people_rating: 50
  });
  // var newLocation = new Location({
  //   lng: 108.240107,
  //   lat:  16.087954,
  //   type_id: 1
  // });
  //create place
  Place.createPlace(newPlace, function (err, place){
    if(err) throw err;
    console.log(place);
  });
})

module.exports = router;
