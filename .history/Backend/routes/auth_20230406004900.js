const authController = require("../controllers/authControllers");
const middlewareController = require("../controllers/middlewareController");


const router = require("express").Router();

router.post("/register", authController.registerUser);

//login
router.post("/login", authController.loginUser);

//refresh
router.post("/refresh", authController.requestRefreshToken);

//logout
router.post("/logout", middlewareController.verifyTonken, authController.logOutUser);

module.exports = router;
