const mongoose = require('mongoose')

const citySchema = new mongoose.Schema({
    name: { type: String, require: true },
    address: {
        name: { type: String, require: true },
        location: {
            type: mongoose.Types.ObjectId,
            ref: "City"
        }
    }
})

const cityModel = mongoose.model('City', citySchema)

module.exports = cityModel