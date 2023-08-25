const express = require("express");
const router = express.Router();
const { mostrar, mandar} = require("../controller/ciudad.controller");


router.get('/agregar',mostrar);
router.post('/agregar/:id',mandar);


module.exports = router;