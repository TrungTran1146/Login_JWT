const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        minLength: 6,
        maxLength: 20,
        unique: true
    }
})