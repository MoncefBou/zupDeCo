import mongoose from 'mongoose';

const eleveSchema = new mongoose.Schema({
    firstname : { type: String, unique: false },
    lastname : { type: String, unique: false },
    gender : { type: String, unique: false },
    dateofbirth : {type: Date, unique: false},
    email : { type: String, unique: false },
    address : {
        location: { type: String, unique: false },
        code: Number,
        city: { type: String, unique: false },
    },
    telephone : { type: Number, unique: false },
    // school : 
    // classe :
    // role :
})

const eleveModel = mongoose("Eleve", eleveSchema)

module.exports = eleveModel