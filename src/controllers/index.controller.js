module.exports = {
  getDashboard: async (req, res) => {
    console.log('getDashboard')
    res.render('dashboard')
  },
}
