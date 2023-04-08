const User = require("../models/User");


const userController = {
    getAllUsers: async (req, res) => {
        try {
            const user = await User.find();

        } catch (err) {
            res.status(500).json(err);
        }
    }
}

module.exports = userController;