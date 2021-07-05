const mongoose = require('mongoose')

const schoolDegreeSchema = new mongoose.Schema({
    name: { type: String, require: true },
})

const schoolDegreeModel = mongoose.model('SchoolDegree', schoolDegreeSchema)

module.exports = schoolDegreeModel