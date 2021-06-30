import mongoose from 'mongoose';

const daySchema = new mongoose.Schema({
    name: { type: String, require: true },
})

const dayModel = mongoose.model('Day', daySchema)

module.exports = dayModel