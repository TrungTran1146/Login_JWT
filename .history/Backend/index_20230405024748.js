const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");

dotenv.config();
const app = express();

// ======================================



async function connectToDatabase() {
    try {
        await mongoose.connect(process.env.MONGODB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to database');
    } catch (error) {
        console.error(error);
    }
}
connectToDatabase();
// =========================
app.use(cors());//để ngăn chặn cors ?
app.use(cookieParser());//tao cookie gan cookie
app.use(express.json());


app.listen(8080, () => {
    console.log("Server is running");
})



//AUTHENTICAION

//AUTHORZATION