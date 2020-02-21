const express = require('express');
const postController = require('../controllers/post_controller');
const router = express.Router();

router.get('/', postController.welcome);
router.get('/posts', postController.index);
router.post('/posts', postController.create);
router.get('/posts/:id', postController.show);
router.patch('/posts/:id', postController.update);

module.exports = router;
