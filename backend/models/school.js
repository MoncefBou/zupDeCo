const mongoose = require('mongoose')

const schoolSchema = new mongoose.Schema({
    name: { type: String, require: true },
    city: String
})

const schoolModel = mongoose.model('School', schoolSchema)

module.exports = schoolModel