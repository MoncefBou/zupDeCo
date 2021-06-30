import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
    firstName: { type: String, require: true },
    lastName: { type: String, require: true },
    schoolLevel: [{
        type: mongoose.Types.ObjectId,
        ref: "SchoolLevel"
    }],
    gender: { type: String, require: true },
    available: [{
        type: mongoose.Types.ObjectId,
        ref: "Available"
    }],
    lesson: [{
        type: mongoose.Types.ObjectId,
        ref: "Lesson"
    }],
    signupDate: { type: Date, require: true },
    email: { type: String, require: true },
    phoneNumber: { type: Number, require: true },
})

const studentModel = mongoose("Student", studentSchema)

module.exports = studentModel