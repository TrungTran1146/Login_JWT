const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");

const app = express();

mongoose.connect("mongodb+srv://trungtran:<password>@cluster0.xidejrl.mongodb.net/?retryWrites=true&w=majority", () => {
    console.log("CONNECTED TO MONGO DB");
})

app.use(cors());//để ngăn chặn cors ?
app.use(cookieParser());//tao cookie gan cookie
app.use(express.json());


app.listen(1234, () => {
    console.log("Server is running");
})