const mongoose = require('mongoose')

const volunteerSchema = new mongoose.Schema({
    firstName: { type: String, require: true },
    lastName: { type: String, require: true },
    gender: { type: String, require: true },
    email: { type: String, require: true },
    password: { type: String, require: true },
    phoneNumber: { type: Number, require: true },
    student: [{
        type: mongoose.Types.ObjectId,
        ref: "Student"
    }],
    role: { type: Number, default: 0 }
})

const volunteerModel = mongoose.model("Volunteer", volunteerSchema)

module.exports = volunteerModel