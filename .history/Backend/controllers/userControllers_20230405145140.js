const User = require("../models/User");


const userController = {
    //get all user
    getAllUsers: async (req, res) => {
        try {
            const user = await User.find();
            res.status(200).json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    //delete user
    deleteUser: async (req, res) => {
        try {
            const user = await User.findById(req.prams.id)
        } catch (err) {
            res.status(500).json(err)
        }
    }
}

module.exports = userController;