import mongoose from 'mongoose';

const lessonSchema = new mongoose.Schema({
    name: [{
        type: mongoose.Types.ObjectId,
        ref: "Day"
    }],
    timeBegin: {type : Date, require: true},
    timeEnd: {type : Date, require: true}
})

const lessonModel = mongoose.model('Lesson', lessonSchema)

module.exports = lessonModel