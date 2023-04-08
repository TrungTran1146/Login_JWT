const userController = require("../controllers/userControllers")
const middlewareController = require("../controllers/middlewareController")

const router = require("express").Router();

//get all user
router.get("/getAllUser", middlewareController.verifyTonken, userController.getAllUsers);


//delete user

router.delete("/:id", userController.deleteUser);
module.exports = router;