const mongoose = require('mongoose')

const schoolSchema = new mongoose.Schema({
    name: { type: String, require: true },
    address: {
        street: { type: String, require: true },
        city: {
            type: mongoose.Types.ObjectId,
            ref: "City"
        }
    }
})

const schoolModel = mongoose.model('School', schoolSchema)

module.exports = schoolModel