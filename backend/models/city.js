const mongoose = require('mongoose')

const citySchema = new mongoose.Schema({
    city: { type: String, require: true },
})

const cityModel = mongoose.model('City', citySchema)

module.exports = cityModel