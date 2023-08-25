const busCtl = {}
const sql = require('../Database/dataBase.sql')
const orm = require('../Database/dataBase.orm')

busCtl.mostrar = (req, res) => {
    res.render('buses/agregar');
}

//mandar
busCtl.mandar = async (req, res) => {
    const id = req.user.id_terminal
    const { nombre_bus, capacidas_bus, horario_bus, placa_bus } = req.body
    const nuevoEnvio = {
        nombre_bus,
        capacidas_bus,
        horario_bus,
        placa_bus
    }
    await orm.bus.create(nuevoEnvio)
    req.flash('success', 'Guardado exitosamente')
    res.redirect('/buses/listar/'+ id)
}

busCtl.listar = async (req, res) => {
    const lista = await sql.query('select * from buses')
    res.render('buses/listar', { lista })
}

//traer datos
busCtl.traer = async (req, res) => {
    const ids = req.params.id
    const lista = await sql.query('select * from buses where id_bus =?', [ids])
    res.render('buses/editar', { lista })
}

busCtl.actualizar = async (req, res) => {
    const id = req.user.id_terminal
    const ids = req.params.id
    const { nombre_bus, capacidas_bus, horario_bus, placa_bus } = req.body
    const nuevoEnvio = {
        nombre_bus,
        capacidas_bus,
        horario_bus,
        placa_bus
    }
    await orm.bus.findOne({ where: { id_bus: id } })
        .then(actualizar => {
            actualizar.update(nuevoEnvio)
        })
    req.flash('success', 'Actualizado exitosamente')
    res.redirect('/buses/listar/');
}
busCtl.eliminar = async (req, res) => {
    const ids = req.params.id
    const id = req.user.id_usuario
    await orm.bus.destroy({ where: { id_bus: id } })
        .then(() => {
            req.flash('success', 'Eliminado exitosamente')
            res.redirect('/buses/listar/' + id);
        })
}


module.exports = busCtl