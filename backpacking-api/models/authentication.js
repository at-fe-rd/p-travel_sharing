var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var AuthenticationSchema = new mongoose.Schema({
  uid: {
    type: String
  },
  user_id: {
    type: Number
  },
  provider: {
    type: String
  },
  password: {
    type: String, bcrypt: true
  },
  access_token: {
    type: String
  },
  confirm_send_at: {
    type: Date
  },
  confirm_token: {
    type: String
  },
  confirm_at: {
    type: Date
  }
});

var Authentication = module.exports = mongoose.model('Authentication', AuthenticationSchema);

module.exports.createAuth = function (auth, callback) {
  if(auth.password) {
    bcrypt.hash(auth.password, 10,function(err,hash){
      if(err) throw err;
      auth.password = hash;
      auth.save(callback);
    });
  }
  else {
    auth.save(callback);
  }
}

module.exports.comparePassword = function(candidatePassword, hash, callback) {
  bcrypt.compare(candidatePassword,hash,function(err, isMatch){
    if(err) return callback(err);
    callback(null,isMatch);
  });
}

module.exports.createAccessToken = function(auth, callback) {
  require('crypto').randomBytes(48, function(err, buffer) {
    auth.access_token = buffer.toString('hex');
    auth.save(callback);
  });
}