const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,//ep buoc phai co
        minLength: 6,
        maxLength: 20,
        unique: true//kiem tra da co ton tai
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
        minLength: 6,
    },
    admin: {
        type: String,
        default: false,

    }
}, { timestamps: true }
)
module.exports = mongoose.model("User", userSchema); 