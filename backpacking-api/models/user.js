var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  _id: {
    type: Number
  },
  name: {
    type: String
  },
  phone: {
    type: String
  },
  gender: {
    type: Number
  },
  avatar: {
    type: String
  }
});

var User = module.exports = mongoose.model('User', UserSchema);

module.exports.createUser = function(newUser, callback) {
  newUser.save(callback);
}

module.exports.genderEnum = Object.freeze({
  male: 0,
  female: 1,
  other: 2
});

module.exports.getUserById = function(id, callback) {
  User.findById(id, callback);
}