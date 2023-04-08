const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");

dotenv.config();
const app = express();

// ======================================
const URL = 'mongodb+srv://mongo-user:<password>@cluster-mongo-test.fxndsza.mongodb.net/?retryWrites=true&w=majority'

const connectDB = async () => {
    try {
        await mongoose.connect(
            URL,
            { useNewUrlParser: true, useUnifiedTopology: true }
        )
        console.log('Connected to mongoDB')
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

connectDB()
// async function connectToDatabase() {
//     try {
//         await mongoose.connect(process.env.MONGODB_URL, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         });
//         console.log('Connected to database');
//     } catch (error) {
//         console.error(error);
//     }
// }
// connectToDatabase();
// =========================
app.use(cors());//để ngăn chặn cors ?
app.use(cookieParser());//tao cookie gan cookie
app.use(express.json());


app.listen(8080, () => {
    console.log("Server is running");
})