const userController = require("../controllers/userControllers")


const router = require("express").Router();


router.get("/getAllUser", userController.getAllUsers);

module.exports = router;