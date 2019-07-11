const mongoose = require('mongoose')

const mixSchema = new mongoose.Schema({
  link: { type: String, required: true, lowercase: true, unique: true }
})

module.exports = mongoose.model('Mix', mixSchema)
