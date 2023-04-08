const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");

dotenv.config();
const app = express();

mongoose.connect(process.env.MONGODB_URL, () => {
    console.log("CONNECTED TO MONGO DB");
})

app.use(cors());//để ngăn chặn cors ?
app.use(cookieParser());//tao cookie gan cookie
app.use(express.json());


app.listen(8080, () => {
    console.log("Server is running");
})