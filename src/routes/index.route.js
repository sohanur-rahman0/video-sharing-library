const express = require('express')
const indexController = require('../controllers/index.controller')
const auth = require('../middleware/auth.middleware')
const router = express.Router()

router.get('/dashboard', auth(), indexController.getDashboard)

module.exports = router
