const { videoService } = require('../services')
module.exports = {
  getVideos: async (req, res) => {
    const students = await studentService.getStudents({ owner: req.session.user.owner })
    const user = req.session.user
    return res.render('owner/student', { students, user })
  },
  addVideo: async (req, res) => {
    await studentService.addStudent(req.body)
    res.redirect('/student')
  },
}
