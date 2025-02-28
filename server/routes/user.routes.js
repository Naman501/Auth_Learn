const {signUp , logIn} = require("../controllers/auth.controller.js");

const express = require("express");
const router = express.Router();

router.post("/signup" , signUp)
router.post("/login" , logIn)


module.exports = router;