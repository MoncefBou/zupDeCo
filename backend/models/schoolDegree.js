const mongoose = require('mongoose')

const schoolDegreeSchema = new mongoose.Schema({
    degree: { type: String, require: true },
})

const schoolDegreeModel = mongoose.model('SchoolDegree', schoolDegreeSchema)

module.exports = schoolDegreeModel