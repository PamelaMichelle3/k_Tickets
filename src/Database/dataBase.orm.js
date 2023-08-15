const { Sequelize } = require("sequelize");

const { MYSQLHOST, MYSQLUSER, MYSQLPASSWORD, MYSQLDATABASE, MYSQLPORT, MYSQL_URI, } = require("../keys");

const sequelize = new Sequelize(MYSQLDATABASE, MYSQLUSER, MYSQLPASSWORD, {
	host: MYSQLHOST,
	port: MYSQLPORT,
	dialect: 'mysql'
});

//const sequelize = new Sequelize(MYSQL_URI);

sequelize.authenticate()
	.then(() => {
		console.log("conectado");
	})
	.catch((err) => {
		console.log("no se conecto");
	});

sequelize.sync({ force: false })
	.then(() => {
		console.log("tablas sincronizadas");
	});


const busModelo = require('../models/bus')
const detalletransporteModelo = require ('../models/detalleTransporte')
const choferModelo= require ('../models/chofer')
const licenciaModelo = require ('../models/licencia')
const ciudadModelo = require ('../models/ciudad')
const cooperativaModelo = require ('../models/cooperativa')
const detallecooperativaModelo = require ('../models/detalleCooperativa')
const encomiendadestinatarioModelo = require ('../models/encomiendaDestinatario.js')
const encomiendaremitenteModelo = require ('../models/encomiendaRemitente')
const detalleencomiendaModelo = require ('../models/detalleEncomienda')
const empleadoModelo = require ('../models/empleado')
const encargadoModelo = require ('../models/encargado')
const rutaModelo = require ('../models/ruta')
const terminalModelo = require ('../models/terminal')

//sincronia

const Bus = busModelo(sequelize, Sequelize)
const detalleTrasporte =  detalletransporteModelo (sequelize, Sequelize)
const Chofer = choferModelo (sequelize, Sequelize)
const Licencia = licenciaModelo (sequelize, Sequelize)
const Ciudad = ciudadModelo (sequelize, Sequelize)
const Cooperativa = cooperativaModelo (sequelize, Sequelize)
const detalleCooperativa = detallecooperativaModelo (sequelize, Sequelize)
const encomiendaDestinatario = encomiendadestinatarioModelo (sequelize, Sequelize)
const EncomiendaRemitente = encomiendaremitenteModelo ( sequelize, Sequelize)
const detalleencomienda = detalleencomiendaModelo (sequelize, Sequelize)
const Empleado = empleadoModelo (sequelize, Sequelize)
const Encargado = encargadoModelo (sequelize, Sequelize)
const Ruta = rutaModelo (sequelize, Sequelize)
const Terminal = terminalModelo (sequelize, Sequelize)

Bus.hasMany(Chofer)
Chofer.belongsTo(Bus)

Bus.hasMany(EncomiendaRemitente)
EncomiendaRemitente.belongsTo(Bus)

Cooperativa.hasMany(detalleCooperativa)
detalleCooperativa.belongsTo(Cooperativa)

Cooperativa.hasMany(Encargado)
Encargado.belongsTo(Cooperativa)

Cooperativa.hasMany(Bus)
Bus.belongsTo(Cooperativa)

Cooperativa.hasMany(Ruta)
Ruta.belongsTo(Cooperativa)

Cooperativa.hasMany(Terminal)
Terminal.belongsTo(Cooperativa)

EncomiendaRemitente.hasMany(detalleencomienda)
detalleencomienda.belongsTo(EncomiendaRemitente)

EncomiendaRemitente.hasMany(encomiendaDestinatario)
encomiendaDestinatario.belongsTo(EncomiendaRemitente)

Licencia.hasMany(Chofer)
Chofer.belongsTo(Licencia)

Ciudad.hasMany(Empleado)
Empleado.belongsTo(Ciudad)

Ciudad.hasMany(Chofer)
Chofer.belongsTo(Ciudad)

Terminal.hasMany(Ciudad)
Ciudad.belongsTo(Terminal)

Ruta.hasMany(Bus)
Bus.belongsTo(Ruta)

detalleTrasporte.hasMany(Bus)
Bus.belongsTo(detalleTrasporte)

 
module.exports = {

Bus,
Chofer,
EncomiendaRemitente,
Cooperativa,
detalleCooperativa,
Encargado,
Ruta,
Terminal,
encomiendaDestinatario,
Licencia, 
Ciudad,
Terminal,
detalleTrasporte,
Empleado

};