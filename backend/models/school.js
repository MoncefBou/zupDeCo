import mongoose from 'mongoose';

const schoolSchema = new mongoose.Schema({
    name: { type: String, unique: false },
    city: { type: String, unique: false }
})

const schoolModel = mongoose.model('School', schoolSchema)

module.exports = schoolModel