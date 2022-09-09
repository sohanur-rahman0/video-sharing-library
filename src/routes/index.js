const express = require('express')
const router = express.Router()

const indexRoute = require('./index.route')
const authRoute = require('./auth.route')

const defaultRoutes = [
  {
    path: '/',
    route: indexRoute,
  },
  {
    path: '/auth',
    route: authRoute,
  },
]

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route)
})

module.exports = router
