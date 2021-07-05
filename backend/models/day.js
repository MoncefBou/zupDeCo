const mongoose = require('mongoose')

const daySchema = new mongoose.Schema({
    day: { type: String, require: true },
})

const dayModel = mongoose.model('Day', daySchema)

module.exports = dayModel