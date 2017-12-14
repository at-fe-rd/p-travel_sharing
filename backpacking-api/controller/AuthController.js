var https = require('https');
var request = require('request-promise');
var User = require('../models/user');
var Auth = require('../models/authentication');
var Counter = require('../models/counter');
var UserSerialized = require('../serialized/User');

exports.facebook = function(req, res, next) {
  const short_token = req.query.authResponse.accessToken;
  const uid = req.query.authResponse.userID;
  Auth.findOne({uid: uid},function(err, auth){
    if (err) throw err;
    const userFieldSet = 'id, name, email, accounts, link, gender, relationship_status, website, picture, photos, feed';
    https.get(`https://graph.facebook.com/oauth/access_token?client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}&grant_type=fb_exchange_token&fb_exchange_token=${short_token}`,(respondApi) => {
      respondApi.setEncoding("utf8");
      let body = "";
      respondApi.on("data", data => {
        body += data;
        body = JSON.parse(body);
        const options = {
          method: 'GET',
          uri: `https://graph.facebook.com/v2.11/${uid}`,
          qs: {
            access_token: body.access_token,
            fields: userFieldSet
          }
        };
        request(options)
        .then(fbRes => {
          var facebookInfo = JSON.parse(fbRes);
          if (auth) {
            let user = new UserSerialized(facebookInfo.name, facebookInfo.picture.data.url, body.access_token, facebookInfo.email, 'fb');
            res.send({
              user
            });
          } else {
            Counter.getNextSequenceValue('userid',function(err, id) {
              var newUser = new User({
                _id: id.sequence_value,
                name: facebookInfo.name,
                gender: Number(User.genderEnum[facebookInfo.gender])
              });
              User.createUser(newUser, function (err, user){
                if(err) throw err;
                var newAuth = new Auth({
                  uid: uid,
                  user_id: user._id,
                  provider: 'fb',
                  access_token: body.access_token
                });
                Auth.createAuth(newAuth, function(err, auth) {
                  if(err) throw err;
                  res.send({
                    facebookInfo
                  });
                });
              });
            });
          }
        });
      });
    });
  });
}
