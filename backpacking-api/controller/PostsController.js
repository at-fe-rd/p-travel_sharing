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

exports.show = function(req, res, next) {
  var params = req.params.id;
  Post.showPost(params, function(err, post, comments) {
    res.send({
      post,
      comments
    });
  });
}

exports.create = function(req, res, next) {
  req.connection.setTimeout(60*10*1000);
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

exports.like = function(req, res, next) {
  req.connection.setTimeout(60*10*1000);
  PostLike.findOne({user_id: res.locals.header.user_id, post_id: req.body.post_id}, function (err, postlike) {
    if(!postLike) {
      Post.updateOne({_id: req.body.post_id},{ $inc: {like: 1}}, function (err, post) {
        console.log(post);
      });
    }
    else {
      Post.updateOne({_id: req.body.post_id},{ $dec: {like: 1}}, function (err, post) {
        console.log(post);
      });
    }
  })
}
