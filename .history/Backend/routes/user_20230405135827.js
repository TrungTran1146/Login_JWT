const userController = require("../controllers/userControllers")


const router = require("express").Router();


router.get("/", userController.getAllUsers);

module.exports = router;