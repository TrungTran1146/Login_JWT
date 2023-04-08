const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        minLength: 6,
        maxLength: 20,
        unique: true
    },
    email: {
        type: String,
        required: true,
        minLength: 10,
        maxLength: 50,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minLength: 10,
        maxLength: 50,
        unique: true
    },
    admin: {
        type: String,
        default: false,

    }
}, { timestamps: true }
)
module.exports = mongoose.model("User", userSchema);