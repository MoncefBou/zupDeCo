import mongoose from 'mongoose';

const volunteerSchema = new mongoose.Schema({
    firstName: { type: String, require: true },
    lastName: { type: String, require: true },
    gender: { type: String, require: true },
    email: { type: String, require: true },
    phoneNumber: { type: Number, require: true },
    student: [{
        type: mongoose.Types.ObjectId,
        ref: "Student"
    }],
})

const volunteerModel = mongoose("Volunteer", volunteerSchema)

module.exports = volunteerModel