//----------------------------------------------------------------------------------------------------------------------
// model attributes
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//----------------------------------------------------------------------------------------------------------------------
// Schema for user model with validation
const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
}, {
    timestamps: true,
});

//----------------------------------------------------------------------------------------------------------------------
// Export the user model
const User = mongoose.model('User', userSchema);
module.exports = User;
