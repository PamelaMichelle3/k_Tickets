const express = require('express');
const { Mostrar, mandar, lista, traer, actualizar, eliminar } = require('../controller/choferes.controller');
const rutas = express.Router();


rutas.get('/chofer', Mostrar)
rutas.post("/chofer/agregar/:id", mandar)
rutas.get("/chofer/lista", lista) 
rutas.get('/chofer/eliminar/:id', eliminar)
rutas.post('/chofer/editar/:id', actualizar)
rutas.get('/chofer/editar/:id', traer)
rutas.get('/chofer/eliminar/:id', eliminar)

module.exports = router