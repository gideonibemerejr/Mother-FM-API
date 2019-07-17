const Post = require('../../models/Post')
module.exports = {
  getPosts,
  create
}
async function getPosts(req, res) {
  try {
    const posts = await Post.find({})
    res.status(200).json(posts)
  } catch (error) {
    res.json({ error })
  }
}
async function create(req, res) {
  try {
    await Mix.create(req.body)
    getPosts(req, res)
  } catch (error) {
    res.json({ error })
  }
}
