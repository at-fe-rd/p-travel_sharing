var mongoose = require('mongoose');
var User = require('./user');
var Comment = require('./comment');
var db = mongoose.connection;

//Place schema
var PostSchema = new mongoose.Schema({
  content: {
    type: String
  },
  location_id: {
    type: Number
  },
  image: {
    type: String
  },
  likes: {
    type: Number, default: 0
  },
  comment_counter: {
    type: Number, default: 0
  },
  hashtag: {
    type: String
  },
  posted_by: {
    type: Number,
    ref: 'User'
  },
  created_at: { 
    type: Date, required: true, default: Date.now 
  }
});

var Post = module.exports = mongoose.model('Post', PostSchema);

module.exports.getAllPost= function({}, callback) {
  Post.find({}).populate('posted_by').exec(function (err, posts) {
    callback(null, posts)
  });
}

module.exports.showPost= function(id, callback) {
  // db.collection('posts').aggregate([
  //   {
  //     $lookup:
  //       {
  //         from: 'comments',
  //         localField: '_id',
  //         foreignField: 'post_id',
  //         as: 'comments'
  //       }
  //   },
  //   { $match : { _id: mongoose.Types.ObjectId(id) } }
  // ], function (err, post) {
  //   User.findOne({_id: post[0].posted_by}, function (err, user) {
  //     post[0].posted_by = user;
  //     callback(null, post[0]);
  //   })
  // });
  Comment.find({post_id: mongoose.Types.ObjectId(id)}).populate('user_id').exec(function (err, comments) {
    Post.findOne({_id: mongoose.Types.ObjectId(id)}).populate('posted_by').exec(function (err, post) {
      callback(null, post, comments);
    });
  });
}

module.exports.createPost = function(newPost, callback){
  newPost.save(callback);
}
