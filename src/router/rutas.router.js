const express = require('express');
const { Mostrar, mandar} = require('../controller/rutas.controller');
const rutas = express.Router();


rutas.get('/rutas', Mostrar)
rutas.post("/rutas/agregar/:id", mandar)

module.exports = router