const mongoose = require('mongoose');
const schema = mongoose.Schema;

const postSchema = new schema({
  title:{
    type: String,
    required: true
  },
  description:{
    type: String,
    required: true
  },
  image:{
    type: String,
    required: true
  },
  author:{
    type: Date,
    default: Date.now
  }
});
module.exports = mongoose.model('post', postSchema);
