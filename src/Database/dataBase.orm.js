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

	const busModel = require('../models/bus');
	const choferModel = require('../models/chofer');
	const ciudadModel = require('../models/ciudad');
	const cooperativaModel = require('../models/cooperativa');
	const detalleCooperativaModel = require('../models/detalle_cooperativa');
	const detalleEncomiendaModel = require('../models/detalle_encomienda');
	const detalleTransporteModel = require('../models/detalle_transporte');
	const empleadoModel = require('../models/empleado');
	const encargadoModel = require('../models/encargado');
	const encomiendaDestinatarioModel = require('../models/encomienda_destinatario');
	const encomiendaRemitenteModel = require('../models/encomienda_remitente');
	const licenciaModel = require('../models/licencia');
	const rutaModel = require('../models/ruta');
	const terminalModel = require('../models/terminal');


//sincronia

const bus =  busModel(sequelize, Sequelize)
const chofer =  choferModel(sequelize, Sequelize)
const ciudad =  ciudadModel(sequelize, Sequelize)
const cooperativa =  cooperativaModel(sequelize, Sequelize)
const detalle_cooperativa =  detalleCooperativaModel(sequelize, Sequelize)
const detalle_encomienda =  detalleEncomiendaModel(sequelize, Sequelize)
const detalle_transporte =  detalleTransporteModel(sequelize, Sequelize)
const empleado =  empleadoModel(sequelize, Sequelize)
const encargado =  encargadoModel(sequelize, Sequelize)
const encomienda_destinatario =  encomiendaDestinatarioModel(sequelize, Sequelize)
const encomienda_remitente =  encomiendaRemitenteModel(sequelize, Sequelize)
const licencia =  licenciaModel(sequelize, Sequelize)
const ruta =  rutaModel(sequelize, Sequelize)
const terminal =  terminalModel(sequelize, Sequelize)

//relaciones
bus.hasMany(chofer)
chofer.belongsTo(bus)

bus.hasMany(encomienda_remitente)
encomienda_remitente.belongsTo(bus)

cooperativa.hasMany(detalle_cooperativa)
detalle_cooperativa.belongsTo(cooperativa)

cooperativa.hasMany(encargado)
encargado.belongsTo(cooperativa)

cooperativa.hasMany(bus)
bus.belongsTo(cooperativa)

cooperativa.hasMany(ruta)
ruta.belongsTo(cooperativa)

cooperativa.hasMany(terminal)
terminal.belongsTo(cooperativa)

encomienda_remitente.hasMany(detalle_encomienda)
detalle_encomienda.belongsTo(encomienda_remitente)

encomienda_remitente.hasMany(encomienda_destinatario)
encomienda_destinatario.belongsTo(encomienda_remitente)

licencia.hasMany(chofer)
chofer.belongsTo(licencia)

ciudad.hasMany(empleado)
empleado.belongsTo(ciudad)

ciudad.hasMany(chofer)
chofer.belongsTo(ciudad)

terminal.hasMany(ciudad)
ciudad.belongsTo(terminal)

ruta.hasMany(bus)
bus.belongsTo(ruta)

detalle_transporte.hasMany(bus)
bus.belongsTo(detalle_transporte)

module.exports = {
	bus,
	chofer,
	ciudad,
	cooperativa,
	detalle_transporte,
	detalle_cooperativa,
	detalle_encomienda,
	empleado,
	encargado,
	encomienda_remitente,
	encomienda_destinatario,
	ruta,
	terminal,
	licencia
};