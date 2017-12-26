var https = require('https');
var request = require('request-promise');
var User = require('../models/user');
var Auth = require('../models/authentication');
var Counter = require('../models/counter');
var UserSerialized = require('../serialized/User');

exports.authorize = function(req, res, next) {
  try {
    console.log('checking authentications');
    const token = req.headers['access-token'];
    const uid = req.headers['uid'];
    if (!token || !uid) throw 'auth is not exist';
    Auth.findOne({uid: uid}, function(err, auth) {
      if (err) throw err;
      if (!auth) throw 'auth is not exist';
      if (auth.access_token !== token) throw "not matched";
      User.findOne({_id: auth.user_id},{name: 1, avatar: 1}, function(err, person) {
        if (err) throw err;
        var user = new UserSerialized(person.name, person.avatar, auth.provider);
        res.locals.user = user;
        res.locals.header = {token: token, uid: uid, user_id: person.id};
        next();
      });
    });
  } catch (e) {
    res.status(404).send({});
  }
}
