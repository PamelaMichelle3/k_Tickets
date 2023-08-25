const express = require('express');
const { showLogin,
    login,} = require('../controller/login.controller');
const router = express.Router();

router.get("/login", showLogin);
router.post("login", login);

module.exports = router