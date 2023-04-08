const User = require("../models/User");


const userController = {
    getAllUsers: async (req, res) => {
        try {
            const user = await User.find();
            res.status(200).json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    deleteUser: async (req, res) => {
        try {

        } catch (err) {
            res.status(500).json(err)
        }
    }
}

module.exports = userController;