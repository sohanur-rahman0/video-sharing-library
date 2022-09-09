const { userService } = require('../services')
module.exports = {
  getLogin: (req, res) => {
    res.render('login')
  },
  postLogin: async (req, res) => {
    try {
      const { email, password } = req.body
      const user = await userService.findOne({ email })
      if (!user) {
        req.flash('error', 'user with this email not found')
        return res.redirect('/auth/login')
      }

      const isPasswordMatch = await user.isPasswordMatch(password)
      if (!isPasswordMatch) {
        req.flash('error', 'password is incorrect')
        return res.redirect('/auth/login')
      }
      user.password = undefined
      req.session.user = user
      req.session.isAuthenticated = true
      console.log('login success')
      res.redirect('/dashboard')
    } catch (error) {
      next(error)
    }
  },
  getRegister: (req, res) => {
    res.render('register')
  },
  postRegister: async (req, res) => {
    const { name, email, password } = req.body
    let user = await userService.checkIfUserExists(email)
    if (user) {
      req.flash('error', 'user with this email already exists')
      return res.redirect('/auth/register')
    }
    user = await userService.create({ name, email, password })
    user.password = undefined
    req.session.user = user
    req.session.isAuthenticated = true
    res.redirect('/dashboard')
  },
  getForgotPassword: (req, res) => {
    res.render('forgot-password')
  },
  logout: async (req, res) => {
    await req.session.destroy()
    res.redirect('/auth/login')
  },
}
