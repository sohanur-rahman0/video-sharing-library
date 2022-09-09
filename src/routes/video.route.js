const express = require('express')
const indexController = require('../controllers/index.controller')
const videoController = require('../controllers/video.controller')
const auth = require('../middleware/auth.middleware')
const router = express.Router()

router.route('/').get(auth(), videoController.getVideos).post(auth(), videoController.addVideo)

router.route('/:id').delete(auth(), videoController.deleteVideo)

router.route('/like/:id').get(auth(), videoController.likeVideo)

router.route('/dislike/:id').get(auth(), videoController.dislikeVideo)

module.exports = router
