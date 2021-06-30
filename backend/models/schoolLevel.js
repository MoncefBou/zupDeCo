import mongoose from 'mongoose';

const schoolLevelSchema = new mongoose.Schema({
    name: { type: String, require: true },
})

const schoolLevelModel = mongoose.model('SchoolLevel', schoolLevelSchema)

module.exports = schoolLevelModel