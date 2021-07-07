const mongoose = require('mongoose')

const parentSchema = new mongoose.Schema({
    grade: { type: String, require: true },
    firstName: { type: String, require: true },
    lastName: { type: String, require: true },
    email: { type: String, require: true, unique: true },
    phoneNumber: { type: Number, require: true, unique: true },
    child: [{
        type: mongoose.Types.ObjectId,
        ref: "Student"
    }]
})

const parentModel = mongoose.model("Parent", parentSchema)

module.exports = parentModel