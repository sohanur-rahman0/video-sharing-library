const express = require('express')
const indexController = require('../controllers/index.controller')
const auth = require('../middleware/auth.middleware')
const router = express.Router()

router.route('/').get(indexController.getHomePage)

router.get('/dashboard', auth(), indexController.getDashboard)

router.route('/play-video/:id').get(indexController.getPlayVideo)

module.exports = router
