const mongoose = require('mongoose')

const schoolLevelSchema = new mongoose.Schema({
    level: { type: String, require: true },
    schoolDegree: {
        type: mongoose.Types.ObjectId,
        ref: "SchoolDegree"
    }
})

const schoolLevelModel = mongoose.model('SchoolLevel', schoolLevelSchema)

module.exports = schoolLevelModel