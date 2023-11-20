

const express = require('express');
const router = express.Router();
const RegisterModel = require('../models/register');
const loginController = require("../controller/login-controller")




router.post("/login", loginController);


module.exports = router;
