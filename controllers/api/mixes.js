const Mix = require('../../models/Mix')

module.exports = {
  getAllMixes,
  getMixes,
  getOne,
  create,
  update,
  deleteMix
}

async function getMixes(req, res) {
  const mixes = await Mix.find({}).limit(req.query.limit || 6)
  res.status(200).json(mixes)
}

async function getAllMixes(req, res) {
  try {
    const mixes = await Mix.find({})
    res.status(200).json(mixes)
  } catch (error) {
    res.json({ error })
  }
}

async function getOne(req, res) {
  const mix = await Mix.findById(req.params.id)
  res.status(200).json(mix)
}

async function create(req, res) {
  try {
    await Mix.create(req.body)
    getAllMixes(req, res)
  } catch (error) {
    res.json({ error })
  }
}

async function update(req, res) {
  const mix = await Mix.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  })
  res.status(200).json(mix)
}

async function deleteMix(req, res) {
  const mix = await Mix.findByIdAndRemove(req.params.id)
  res.status(200).json(mix)
}
