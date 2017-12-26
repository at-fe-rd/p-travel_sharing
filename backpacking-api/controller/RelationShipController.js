var Auth = require('../models/authentication');
var passport = require('passport');
var Post = require('../models/post');
var User = require('../models/user');


exports.index = function(req, res, next) {
  var params = req.query;
  Post.getAllPost({}, function(err, posts) {
    res.send({
      posts
    });
  });
}

exports.create = function(req, res, next) {
  User.getUserById(res.locals.header.user_id, function(err, result) {
    var newPost = new Post({
      content: req.body.content,
      image: req.files[0].filename,
      posted_by: res.locals.header.user_id,
      hashtag: req.body.hashtag
    });
    Post.createPost(newPost, function(err, post){
      if (err) throw err;
      res.send({
        post
      })
    });
  })
}
