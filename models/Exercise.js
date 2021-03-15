const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    day: {
        type: Date,
        default: Date.now()
    },
    exercises: [{
        type: {
            type: String,
            trim: true,
            required: 'Type of exercise is required!'
        },
        name: {
            type: String,
            trim: true,
            required: 'Name of exercise is required!'
        },
        weight: {
            type: Number,
        },
        sets: {
            type: Number,
        },
        reps: {
            type: Number,
        },
        distance: {
            type: Number,
        },
        duration: {
            type: Number,
            required: 'Duration is required!'
        }
    }]
})

const Exercise = mongoose.model('Exercises', exerciseSchema);

module.exports = Exercise;