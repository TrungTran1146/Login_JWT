const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,//ep buoc phai co
        minlength: 6,
        maxlength: 20,
        unique: true//kiem tra da co ton tai
    },
    email: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 50,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
    },
    admin: {
        type: String,
        default: false,

    }
}, { timestamps: true }
)
module.exports = mongoose.model("User", userSchema); 