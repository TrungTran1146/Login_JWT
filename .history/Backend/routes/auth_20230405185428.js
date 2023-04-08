const authController = require("../controllers/authControllers");
const middlewareController = require("../controllers/middlewareController");

const router = require("express").Router();

router.post("/register", authController.registerUser);

//login
router.post("/login", authController.loginUser);


router.post("/");
module.exports = router;
