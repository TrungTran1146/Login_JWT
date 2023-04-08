const userController = require("../controllers/userControllers")


const router = require("express").Router();

//get all user
router.get("/", userController.getAllUsers);


//delete user

router.delete("/:id", userController.deleteUser);
module.exports = router;