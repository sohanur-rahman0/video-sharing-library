const mongoose = require('mongoose')

const videoSchema = mongoose.Schema(
  {
    url: {
      type: String,
    },
    likedBy: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
    dislikedBy: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
    uploadedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
)

/**
 * @typedef Video
 */
const Video = mongoose.model('Video', videoSchema)

module.exports = Video
