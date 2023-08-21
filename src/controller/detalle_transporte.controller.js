const detalle_transporteCtl = {}
const sql = require('../Database/dataBase.sql')
const orm = require('../Database/dataBase.orm')

detalle_transporteCtl.mostrar = (req, res) => {
    res.render('detalle_transportes/agregar');
}

//mandar
detalle_transporteCtl.mandar = async (req, res) => {
    const id = req.user.id_terminal
    const { nombres_cooperativa_detalle_transporte,tarifa_detalle_transporte,nombre_copiloto_detalle_transporte} = req.body
    const nuevoEnvio = {
        nombres_cooperativa_detalle_transporte,
        tarifa_detalle_transporte,
        nombre_copiloto_detalle_transporte
    }
    await orm.detalle_transporte.create(nuevoEnvio)
    req.flash('success', 'Guardado exitosamente')
    res.redirect('/detalle_transportes/listar/' + id)
}

detalle_transporteCtl.listar = async (req, res) => {
    const lista = await sql.query('select * from detalle_transportes')
    res.render('detalle_transportes/listar', { lista })
}

//traer datos
detalle_transporteCtl.traer = async (req, res) => {
    const ids = req.params.id
    const lista = await sql.query('select * from detalle_transportes where id_detalle_transporte =?', [ids])
    res.render('detalle_transportes/editar', { lista })
}

detalle_transporteCtl.actualizar = async (req, res) => {
    const id = req.user.id_terminal
    const ids = req.params.id
    const { nombres_cooperativa_detalle_transporte,tarifa_detalle_transporte,nombre_copiloto_detalle_transporte} = req.body
    const nuevoEnvio = {
        nombres_cooperativa_detalle_transporte,
        tarifa_detalle_transporte,
        nombre_copiloto_detalle_transporte
    }
    await orm.detalle_transporte.findOne({ where: { id_detalle_transporte: ids } })
        .then(actualizar => {
            actualizar.update(nuevoEnvio)
        })
    req.flash('success', 'Actualizado exitosamente')
    res.redirect('/detalle_transportes/listar/' + id);
}
detalle_transporteCtl.eliminar = async (req, res) => {
    const ids = req.params.id
    const id = req.user.id_usuario
    await orm.detalle_transporte.destroy({ where: { id_detalle_transporte: ids } })
        .then(() => {
            req.flash('success', 'Eliminado exitosamente')
            res.redirect('/detalle_transportes/listar/' + id);
        })
}


module.exports = detalle_transporteCtl