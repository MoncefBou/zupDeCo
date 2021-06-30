import mongoose from 'mongoose';

const availableSchema = new mongoose.Schema({
    name: [{
        type: mongoose.Types.ObjectId,
        ref: "Day"
    }],
    timeBegin: {type : Date, require: true},
    timeEnd: {type : Date, require: true}
})

const availableModel = mongoose.model('Available', availableSchema)

module.exports = availableModel