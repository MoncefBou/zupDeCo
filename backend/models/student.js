const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    firstName: { type: String, require: true },
    lastName: { type: String, require: true },
    gender: { type: String, require: true },
    dateOfBirth: {type: Date, require: true},
    schoolLevel: {
        type: mongoose.Types.ObjectId,
        ref: "SchoolLevel"
    },
    available: [{
        type: mongoose.Types.ObjectId,
        ref: "Available"
    }],
    lesson: [{
        type: mongoose.Types.ObjectId,
        ref: "Lesson"
    }],
    signupDate: { type: String, default: Date.now },
    email: { type: String, require: true },
    phoneNumber: { type: Number, require: true },
    address : {
        street: {type: String, require: true},
        city: {
            type: mongoose.Types.ObjectId,
            ref: "City"
        }
    },
    school: {
        type: mongoose.Types.ObjectId,
        ref: "School"},

    message: { type: String, require: true }
})

const studentModel = mongoose.model("Student", studentSchema)

module.exports = studentModel