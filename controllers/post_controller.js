const Post = require('../models/post_model.js');

exports.welcome = (req, res, next) => {
  res.send('ruunning node api');
}

exports.index = (req, res, next) => {
  Post.find()
    .then(result => {
      res.send(result);
    }).catch(err => {
      res.status(400).send(err);
    })
}

exports.show = (req, res, next) => {
  Post.findById(req.params.id)
    .then(result => {
      res.send(result);
    }).catch(err => {
      res.status(400).send(err);
    })
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
