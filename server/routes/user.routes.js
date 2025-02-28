const  verifyToken  = require("../middlewares/verifyToken.js");
const {signUp , logIn} = require("../controllers/auth.controller.js");
const {getUser} = require("../controllers/user.controller.js");


const express = require("express");
const router = express.Router();

router.post("/signup" , signUp)
router.post("/login" , logIn)
router.get("/users" , verifyToken , getUser)



module.exports = router;