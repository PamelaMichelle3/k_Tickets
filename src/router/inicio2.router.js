const express = require('express');
const { Mostrar, mandar } = require('../controller/inicio2.controller');

const router = express.Router();

router.get ('/inicio2', Mostrar)
router.post ('/inicio2', mandar)

module.exports = router