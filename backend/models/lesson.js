const mongoose = require('mongoose')

const lessonSchema = new mongoose.Schema({
    name: { type: String, require: true },
})

const lessonModel = mongoose.model('Lesson', lessonSchema)

module.exports = lessonModel