const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    company: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const HR = mongoose.model('HR', userSchema);

module.exports = HR;