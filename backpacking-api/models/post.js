var mongoose = require('mongoose');

//Place schema
var PostSchema = new mongoose.Schema({
  // _id: {
  //   type: Number
  // },
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
  user_id:{
    type: Number
  }
});

var Post = module.exports = mongoose.model('Post', PostSchema);

module.exports.getPost= function(name_place, callback) {
  var query = {name_place: name_place};
  Place.findOne(query, callback);
}

module.exports.createPost = function(newPost, callback){
  newPost.save(callback);
}
