var mongoose = require('mongoose');

//Comment schema
var RelationShipSchema = new mongoose.Schema({
  user_id: {
    type: Number,
    ref: 'User'
  },
  user_friend_id: {
    type: Number,
    ref: 'User'
  },
  rela_status: {
    type: Number,
    ref: 'Post'
  }
});

var RelationShip = module.exports = mongoose.model('RelationShip', RelationShipSchema);

module.exports.getAllFriend= function(userId, callback) {
  RelationShip.find({user_id: userId}).populate('user_id').populate('user_friend_id').exec(function (err, friends) {
    console.log(friends)
    callback(null, friends)
  });
}

module.exports.relaStatusEnum = Object.freeze({
  follow: 0,
  friend: 1,
  block: 2
});

module.exports.addOrFollowPerson = function(newRela, callback){
  newRela.save(callback);
}

module.exports.blockFriend = function(newRela, callback){
  newRela.save(callback);
}

module.exports.acceptFriend = function(newRela, callback){
  newRela.save(callback);
}
