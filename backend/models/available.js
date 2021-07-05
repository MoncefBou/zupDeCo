const mongoose = require('mongoose')

const availableSchema = new mongoose.Schema({
    day: {
        type: mongoose.Types.ObjectId,
        ref: "Day"
    },
    timeBegin: {type : Number, require: true},

})

const availableModel = mongoose.model('Available', availableSchema)

module.exports = availableModel