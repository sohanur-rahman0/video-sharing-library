const { videoService } = require('../services')
module.exports = {
  getVideos: async (req, res) => {
    const videos = await videoService.getVideos({ uploadedBy: req.session.user._id })
    const user = req.session.user
    return res.render('video', { videos, user })
  },
  addVideo: async (req, res) => {
    const videoId = String(req.body.url).match(/[\w\-]{11,}/)[0]
    const thumbnail = `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`
    req.body.thumbnail = thumbnail
    await videoService.addVideo(req.body)
    res.redirect('/video')
  },

  deleteVideo: async (req, res) => {
    await videoService.deleteVideo({ _id: req.params.id })
    res.redirect('/video')
  },

  likeVideo: async (req, res) => {
    const video = await videoService.getVideo({ _id: req.params.id })
    video.dislikedBy.pull(req.session.user._id)
    if (video.likedBy.includes(req.session.user._id)) {
      await video.save()
      return res.redirect('/play-video/' + req.params.id)
    }
    video.likedBy.push(req.session.user._id)
    await video.save()
    res.redirect('/play-video/' + req.params.id)
  },
  dislikeVideo: async (req, res) => {
    const video = await videoService.getVideo({ _id: req.params.id })
    video.likedBy.pull(req.session.user._id)
    if (video.dislikedBy.includes(req.session.user._id)) {
      await video.save()
      return res.redirect('/play-video/' + req.params.id)
    }
    video.dislikedBy.push(req.session.user._id)
    await video.save()
    res.redirect('/play-video/' + req.params.id)
  },
}
