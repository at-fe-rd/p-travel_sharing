const { check, validationResult } = require('express-validator/check');
const { matchedData, sanitize } = require('express-validator/filter');
var User = require('../models/user');
var Auth = require('../models/authentication');
var Counter = require('../models/counter');

exports.create = function(req,res,errors){
  //chrome duplicate request 2 times so we have to setTimeout
  req.connection.setTimeout(60*10*1000);
  Counter.getNextSequenceValue('userid',function(err, id) {
    var newUser = new User(matchedData(req)['user']);
    newUser._id = id.sequence_value;
    User.createUser(newUser, function (err, user){
      if(err) throw err;
      var newAuth = new Auth(matchedData(req)['auth']);
      newAuth.user_id = user.id
      Auth.createAuth(newAuth, function(err, auth) {
        if(err) throw err;
        res.status(200).send({});
      });
    });
  });
}