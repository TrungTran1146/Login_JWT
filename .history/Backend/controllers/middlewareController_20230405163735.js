const jwt = require("jsonwebtoken");

const middlewareController = {

    //verifyTonken
    verifyTonken: (req, res, next) => {
        const token = req.headers.token;
        if (token) {
            const accessToken = token.split(" ")[1];
            jwt.verify(accessToken, process.env.JWT_ACCESS_KEY, (err, user) => {
                if (err) {
                    res.status(403).json("Tonken isn't not valid");
                }
                req.user = user;
                next();
            });
        } else {
            res.status(401).json("You're not authenticated");
        }
    }
}

module.exports = middlewareController;