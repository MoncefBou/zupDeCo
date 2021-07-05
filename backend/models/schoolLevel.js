const mongoose = require('mongoose')

const schoolLevelSchema = new mongoose.Schema({
    name: { type: String, require: true },
    schoolDegree: {
        type: mongoose.Types.ObjectId,
        ref: "SchoolDegree"
    }
})

const schoolLevelModel = mongoose.model('SchoolLevel', schoolLevelSchema)

module.exports = schoolLevelModel