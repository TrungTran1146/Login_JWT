const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");

const app = express();

app.use(cors());//để ngăn chặn cors ?
app.use(cookieParser());//tao cookie gan cookie
app.use(express.json());


app.listen(1234, () => {
    console.log("Server is running");
})