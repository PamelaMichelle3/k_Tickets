const express = require('express');
const { Mostrar, mandar, lista, traer, actualizar, eliminar } = require('../controller/buses.controller');
const rutas = express.Router();


rutas.get('/buses', Mostrar)
rutas.post("/buses/agregar/:id", mandar)
rutas.get("/buses/lista", lista)
rutas.get('/buses/eliminar/:id', eliminar)
rutas.post('/buses/editar/:id', actualizar)
rutas.get('/buses/editar/:id', traer)
rutas.get('/buses/eliminar/:id', eliminar)

module.exports = router