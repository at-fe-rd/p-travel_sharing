var Auth = require('../models/authentication');
var User = require('../models/user');
var passport = require('passport');
var UserSerialized = require('../serialized/User');

exports.create = function(req, res, next) {
  Auth.findOne({uid: req.body.uid}, function (err, auth) {
    if(err) throw err;
    if(auth) {
      Auth.comparePassword(req.body.password, auth.password, function(err,isMatch){
        if(err) throw err;
        if(isMatch) {
          Auth.createAccessToken(auth, function(err, authwAccessToken){
            res.set({
              'Access-Token': authwAccessToken.access_token,
              'Uid': authwAccessToken.uid,
              'Provider': authwAccessToken.provider
            });
            User.findOne({_id: authwAccessToken.user_id},{name: 1, avatar: 1}, function(err, person) {
              var user = new UserSerialized(person.name, person.avatar, auth.provider);
              res.send({
                user
              })
            });
          })
        } 
      });
    }
  })
}

exports.show = function(req, res, next) {
  user = res.locals.user;
  header = res.locals.header;
  res.set({
   'Access-Token': header.token,
   'Uid': header.uid,
   'Provider': user.provider
  });
  res.send({
    user
  })
}

exports.destroy = function(req, res, next) {
  const token = req.headers['access-token'];
  const uid = req.headers['uid'];
  const provider = req.headers['provider'];
  if(token && uid) {
    Auth.updateOne({uid: uid}, {access_token: ''}, function(err, result) {
      if (err) throw err;
      res.send({
      })
    });
  }
}