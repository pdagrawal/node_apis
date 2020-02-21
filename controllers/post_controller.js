const Post = require('../models/post_model.js');

exports.index = (req, res, next) => {
  res.send('ruunning node api');
}

exports.create = (req, res, next) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
    image: req.body.image
  })
  post.save();
  res.send('Post added successfully');
}
