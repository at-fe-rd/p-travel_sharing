var mongoose = require('mongoose');

//Place schema
var PlaceSchema = new mongoose.Schema({
  name_place: {
    type: String,
    index: true
  },
  address: {
    type: String
  },
  detail: {
    type: String
  },
  average_rating: {
    type: Number
  },
  direction: {
    type: String
  },
  people_rating: {
    type: Number
  },
  warning: {
    type: Number
  },
  location_id: {
    type: Number
  }
});

var Place = module.exports = mongoose.model('Place', PlaceSchema);

module.exports.getPlaceByName= function(name_place, callback) {
  var query = {name_place: name_place};
  Place.findOne(query, callback);
}

module.exports.getAllPlaces= function({}, callback) {
  Place.find({}, callback);
}

module.exports.createPlace = function(newPlace, callback){
  newPlace.save(callback);
}

module.exports.getPlaceDetail = function(id, callback){
  var query = {location_id: id};
  Place.findOne(query, callback);
}