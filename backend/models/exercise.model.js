//----------------------------------------------------------------------------------------------------------------------
// model attributes
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//----------------------------------------------------------------------------------------------------------------------
// Schema for exercise model with validation
const exerciseSchema = new Schema({
    username: { type: String, required: true },
    description: { type: String, required: true },
    duration: { type: Number, required: true },
    date: { type: Date, required: true },
}, {
    timestamps: true,
});

//----------------------------------------------------------------------------------------------------------------------
// Export the user model
const Exercise = mongoose.model('Exercise', exerciseSchema);
module.exports = Exercise;
