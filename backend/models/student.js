const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    firstName: { type: String, require: true },
    lastName: { type: String, require: true },
    gender: { type: String, require: true },
    dateOfBirth: { type: Date, require: true },
    schoolLevel: {
        type: mongoose.Types.ObjectId,
        ref: "SchoolLevel",
        require: true
    },
    available: [{
        type: mongoose.Types.ObjectId,
        ref: "Available",
        require: true
    }],
    parent: {
        type: mongoose.Types.ObjectId,
        ref: "Parent",
        require: true
    },
    signupDate: { type: String, default: Date.now },
    email: String,
    address: {
        street: { type: String },//, require: true},
        city: {
            type: mongoose.Types.ObjectId,
            ref: "City",
            require: true
        }
    },
    school: {
        type: mongoose.Types.ObjectId,
        ref: "School",
        require: true
    },
    message: String,
    validation: { type: Boolean, default: false }
})

const studentModel = mongoose.model("Student", studentSchema)

module.exports = studentModel

