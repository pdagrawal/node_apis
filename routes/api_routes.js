const express = require('express');
const postController = require('../controllers/post_controller');
const router = express.Router();

router.get('/', postController.index);
router.post('/posts', postController.create);

module.exports = router;
