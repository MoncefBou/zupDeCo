import mongoose from 'mongoose';

const matiereSchema = new mongoose.Schema({
    name: { type: String, unique: true },
})

const matiereModel = mongoose.model('Matiere', matiereSchema)

module.exports = matiereModel