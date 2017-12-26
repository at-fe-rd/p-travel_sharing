var Auth = require('../models/authentication');
var passport = require('passport');
var Post = require('../models/post');
var Comment = require('../models/comment');
var mongoose = require('mongoose');

exports.index = function(req, res, next) {
  var params = req.query;
  Comment.getAllCommentsInPost(params,function(err,comments){
    res.send({
      comments
    })
  });
}

exports.create = function(req, res, next) {
  req.connection.setTimeout(60*10*1000);
  var newComment = new Comment({
    content: req.body.content,
    user_id: res.locals.header.user_id,
    hashtag: req.body.hashtag,
    post_id: mongoose.Types.ObjectId(req.body.post_id)
  });
  Comment.createComment(newComment, function(err, comment) {
    if (err) throw err;
    Post.updateOne({_id: req.body.post_id}, { $inc: { comment_counter: 1 }}, function (err, a) {
      res.send({
        comment
      })
    });
  })
}

exports.destroy = function(req, res, next) {
  
}
