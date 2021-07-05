const mongoose = require('mongoose')

const lessonSchema = new mongoose.Schema({
    lesson: { type: String, require: true },
})

const lessonModel = mongoose.model('Lesson', lessonSchema)

module.exports = lessonModel