var Auth = require('../models/authentication');
var passport = require('passport');
var Post = require('../models/post');


exports.index = function(req, res, next) {
  var params = req.query;
  Location.getAllLocationsInArea({params}, function(err, locations) {
    res.send({
      locations
    });
  });
}

exports.create = function(req, res, next) {
  var newPost = new Post({
    content: req.body.content,
    image: req.files[0].filename,
    user_id: res.locals.header.user_id
  })
  Post.createPost(newPost, function(err, post){
    if (err) throw err;
    console.log(post);
  });
  return res.json('success');
}
