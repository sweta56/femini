const express = require("express");
const router = express.Router();

// import controller
const { signup, accountActivation, signin,forgotPassword,
    resetPassword,
    verifyAccount, } = require("../controllers/auth");

const { auth } = require("../middleware/auth");

router.post("/signup", signup);
router.post("/account-activation", accountActivation);
router.post("/signin", signin);
router.post("/verify",auth,verifyAccount );
router.post("/forgot-password", forgotPassword);
router.post("/reset-password", resetPassword);



module.exports = router;
