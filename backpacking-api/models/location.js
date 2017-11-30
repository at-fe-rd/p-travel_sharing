var mongoose = require('mongoose');
var db = mongoose.connection;

var LocationSchema = new mongoose.Schema({
  _id: {
    type: Number
  },
  lng: {
    type: Number
  },
  lat: {
    type: Number
  },
  type_id: {
    type: Number
  }
})

var Location = module.exports = mongoose.model('Location', LocationSchema);

module.exports.createLocation = function(newLocation, callback){
  newLocation.save(callback);
}

module.exports.getLocationDetail = function({params}, callback){
  db.collection('locations').aggregate([
    {
      $lookup:
        {
          from: 'places',
          localField: '_id',
          foreignField: 'location_id',
          as: 'detail'
        }
    },
    { $match : { _id : Number(params.id) } }
  ], callback);
}

module.exports.getAllLocationsInArea= function({params}, callback) {
  let west = Number(params.circle.west);
  let east = Number(params.circle.east);
  let north = Number(params.circle.north);
  let south = Number(params.circle.south);
  
  var query = { lng: {$gt: west, $lt: east }, 
                lat: {$gt: south, $lt: north}
              };
  Location.find(query, function (err, result){
    callback(null, isInCircle(params.local,result,params.circle.east-params.local.lng));
  });
}

isInCircle= function(center,points,radius,callback) {
  var result = points;
  points.forEach( (point,index) => {
    let d=Math.sqrt(Math.pow(center.lng-point.lng,2)+Math.pow(center.lat-point.lat,2));
    result = d<radius? result : result.splice(index, 1);
  });
  return result;
}
