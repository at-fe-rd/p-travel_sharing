var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Comment schema
var CommentSchema = new mongoose.Schema({
  content: {
    type: String
  },
  user_id: {
    type: Number,
    ref: 'User'
  },
  likes: {
    type: Number, default: 0
  },
  post_id: {
    type: Schema.ObjectId,
    ref: 'Post'
  },
  created_at: { 
    type: Date, required: true, default: Date.now 
  }
});

var Comment = module.exports = mongoose.model('Comment', CommentSchema);

module.exports.getAllCommentsInPost= function(postId, callback) {
  Comment.find({post_id: postId}).populate('user_id').exec(function (err, comments) {
    callback(null, comments)
  });
}

module.exports.createComment = function(newComment, callback){
  newComment.save();
  Comment.populate(newComment, {path:'user_id'}, function (err, comment) {
    callback(null, comment);
  })
}

module.exports.deleteComment = function(commentId, callback){
  Comment.remove({_id: commentId}, function (err, result) {
    callback(null, result)
  });
}