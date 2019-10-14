const express = require('express');

const postController = require('../controllers/post');

const router = express.Router();

//localhost:8000/post/getPosts GET REQUEST
router.get('/getPosts', postController.getAllPosts);

//localhost:8000/post/createPost POST REQUEST
router.post('/createPost', postController.postCreatePost);

module.exports = router;
