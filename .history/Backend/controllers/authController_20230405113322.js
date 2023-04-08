const User = require("../models/User");
const bcrypt = require("bcrypt");

const authController = {
    registerUser: async (req, res) => {
        try {
            const salt = await bcrypt.genSalt(10);
            const hashed = await bcrypt.hash(req.body.password, salt);
        } catch (error) {
            res.status(500).json(err);
        }
    }
};

module.exports = authController;