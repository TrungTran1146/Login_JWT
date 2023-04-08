const userController = require("../controllers/userControllers")


const router = require("express").Router();

//get all user
router.get("/getAllUser", userController.getAllUsers);


//delete user
router.delete("/deleteUser", userController.deleteUser);
module.exports = router;