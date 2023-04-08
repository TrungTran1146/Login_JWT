const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


const authController = {
    registerUser: async (req, res) => {
        try {
            const salt = await bcrypt.genSalt(10);
            const hashed = await bcrypt.hash(req.body.password, salt);

            //create new user
            const newUser = await new User({
                username: req.body.username,
                email: req.body.email,
                password: hashed
            });

            //Save to DB
            const user = await newUser.save();
            res.status(200).json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    //generate access token
    generateAccessToken: (user) => {
        return jwt.sign({
            id: user.id,
            admin: user.admin
        },
            process.env.JWT_ACCESS_KEY,
            { expiresIn: "1h" }
        );
    },
    //generate refreshToken
    generateRefreshToken: (user) => {
        return jwt.sign({
            id: user.id,
            admin: user.admin
        },
            process.env.JWT_REFRESH_KEY,
            { expiresIn: "365d" }
        );

    },
    //login
    loginUser: async (req, res) => {
        try {
            const user = await User.findOne({ username: req.body.username });
            if (!user) {
                res.status(404).json("Wrong username!");
            }
            const validPassword = await bcrypt.compare(
                req.body.password,
                user.password
            );
            if (!validPassword) {
                res.status(404).json("Wrong password");
            }
            if (user && validPassword) {
                //accessToken
                const accessToken = authController.generateAccessToken(user);
                //refreshToken
                const refreshToken = authController.generateRefreshToken(user);
                //add refreshToken vao cookie
                res.cookie("refreshToken", refreshToken, {
                    httpOnly: true,
                    secure: false,
                    path: "/",
                    sameSire: "strict",//ngan cac tan cong csos
                });
                //loai password
                const { password, ...others } = user._doc;
                res.status(200).json({ ...others, accessToken });
            }
        } catch (err) {
            res.status(500).json(err);
        }
    },

    requestRefreshToken: async (req, res) => {
        try {
            //take refresh token user
            const refreshToken = req.cookies.refreshToken;
            if (!refreshToken) {
                return res.status(401).json("You're not authenticated")
            }
        } catch (err) {
            res.status(500).json(err);

        }
    },
};

module.exports = authController;

//store token
//1) LOCAL STORAGE
//XSS
//2) HTTPOnly COOKIES
//CSRF -> SAME SITE
// 3) REDUX STORE -> ACCESS TOKEN
// HTTP ONLY COOKIES -> REFRESH TOKEN


