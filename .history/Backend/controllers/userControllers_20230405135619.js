const User = require("../models/User");


const userController = {
    getAllUsers: async (req, res) => {
        try {

        } catch (err) {
            res.status(500).json(err);
        }
    }
}

module.exports = userController;