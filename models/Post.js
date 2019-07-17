const mongoose = require('mongoose')

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true
    },
    link: { type: String, required: true, lowercase: true, unique: true },
    body: String
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('Post', postSchema)
