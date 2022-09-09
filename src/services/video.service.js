const { Video } = require('../models')

module.exports = {
  getVideos: (query) => {
    return Video.find(query)
  },
  getVideo: (query) => {
    return Video.findOne(query)
  },
  addVideo: (video) => {
    return Video.create(video)
  },
  updateVideo: (query, video) => {
    return Video.updateOne(query, video)
  },
  deleteVideo: (query) => {
    return Video.deleteOne(query)
  },
}
