const User = require("../models/User");
const bcrypt = require("bcrypt");

const authController = {
    registerUser: async (req, res) => {
        try {

        } catch (error) {
            res.status(500).json(err);
        }
    }
};

module.exports = authController;