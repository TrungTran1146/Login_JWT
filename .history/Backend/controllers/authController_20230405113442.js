const User = require("../models/User");
const bcrypt = require("bcrypt");

const authController = {
    registerUser: async (req, res) => {
        try {
            const salt = await bcrypt.genSalt(10);
            const hashed = await bcrypt.hash(req.body.password, salt);

            //create new user
            const newUser = await new User({
                userName: req.body.userName,
                email: req.body.email,
                password: hashed
            })
        } catch (error) {
            res.status(500).json(err);
        }
    }
};

module.exports = authController;