const mongoose = require('mongoose')

const citySchema = new mongoose.Schema({
    city: String,
    codePostaux: Array
})

const cityModel = mongoose.model('City', citySchema)

module.exports = cityModel