const { request } = require("gaxios");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

const auth = async (req, res, next) => {
    const bearerHeader = req.header("Authorization");

    if (!bearerHeader) {
        return res.status(400).send({ error: "provide a token" });
    }

    const bearer = bearerHeader.split(" ");
    const token = bearer[1] || "";

    try {
        const verifiedToken = jwt.verify(token, process.env.JWT_SECRET);

        if (verifiedToken) {
            const user = await User.findOne({ _id: verifiedToken._id });
            console.log(user)
            req.user = user;
            next();
        } else {
            res.status(400).send({ error: "invalid token" });
        }
    } catch (error) {
        console.log(error);

        res.status(400).send({ error: "invalid token" });
    }
};

module.exports = { auth };