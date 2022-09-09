const express = require('express')
const router = express.Router()

const indexRoute = require('./index.route')
const authRoute = require('./auth.route')
const videoRoute = require('./video.route')

const defaultRoutes = [
  {
    path: '/',
    route: indexRoute,
  },
  {
    path: '/auth',
    route: authRoute,
  },
  {
    path: '/video',
    route: videoRoute,
  },
]

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route)
})

module.exports = router
