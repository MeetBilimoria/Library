// routes/login-routes.js

const express = require('express');
const router = express.Router();
const RegisterModel = require('../models/register');
const registerController = require("../controller/register-controller")


// Login route

router.post("/register", registerController);


module.exports = router;
