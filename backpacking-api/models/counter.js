var mongoose = require('mongoose');
var db=mongoose.connection;
//Place schema
var CounterSchema = new mongoose.Schema({
  _id: {
    type: String
  },
  sequence_value: {
    type: Number
  }
});

var Counter = module.exports = mongoose.model('Counter', CounterSchema);

module.exports.getNextSequenceValue = (sequenceName, callback) => {
  Counter.findOneAndUpdate( 
    {_id: sequenceName }, 
    {$inc:{sequence_value:1}},
    {upsert: true, new: true},
    callback);
}

