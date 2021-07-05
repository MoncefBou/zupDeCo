const mongoose = require('mongoose')

const adminSchema = new mongoose.Schema({
    firstName: { type: String, require: true },
    lastName: { type: String, require: true },
    email: { type: String, require: true },
    password : {type : String, require : true},
    phoneNumber: { type: Number, require: true },
})

const adminModel = mongoose.model("Admin", adminSchema)

module.exports = adminModel