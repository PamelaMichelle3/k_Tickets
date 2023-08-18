const express = require('express');
const { Mostrar, mandar } = require('../controller/login.controller');
const router = express.Router();

router.get('/',Mostrar)
router.post('/',mandar)

module.exports = router