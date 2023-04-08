const authController = require("../controllers/authControllers");


const router = require("express").Router();

router.post("/register", authController.registerUser);

//login
router.post("/login", authController.loginUser);


router.post("/refresh", authController.requestRefreshToken);
module.exports = router;
