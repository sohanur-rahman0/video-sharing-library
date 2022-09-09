const { videoService } = require('../services')
module.exports = {
  getHomePage: async (req, res) => {
    const videos = await videoService.getVideos()
    res.render('index', { videos })
  },
  getDashboard: async (req, res) => {
    console.log('getDashboard')
    const videos = await videoService.getVideos({ uploadedBy: req.session.user._id })
    res.render('dashboard', { videos })
  },
  getPlayVideo: async (req, res) => {
    const video = await videoService.getVideo({ _id: req.params.id })
    video.viewCount += 1
    await video.save()
    video.url = video.url.replace('watch?v=', 'embed/')
    res.render('play-video', { video })
  },
}
