const { videoService } = require('../services')
module.exports = {
  getVideos: async (req, res) => {
    const videos = await videoService.getVideos({ uploadedBy: req.session.user._id })
    const user = req.session.user
    return res.render('video', { videos, user })
  },
  addVideo: async (req, res) => {
    await videoService.addVideo(req.body)
    res.redirect('/video')
  },

  deleteVideo: async (req, res) => {
    await videoService.deleteVideo({ _id: req.params.id })
    res.redirect('/video')
  },
}
