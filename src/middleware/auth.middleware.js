const auth = (roles) => async (req, res, next) => {
  try {
    if (!req.session.isAuthenticated) {
      return res.redirect('/auth/login')
    }
    // if (roles.includes(req.session.user.role)) {
    //   return next()
    // }
    // return res.redirect('/')
    return next()
  } catch (error) {
    next(error)
  }
}

module.exports = auth
