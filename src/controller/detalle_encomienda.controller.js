const detalle_encomiendaCtl = {}
const sql = require('../Database/dataBase.sql')
const orm = require('../Database/dataBase.orm')

detalle_encomiendaCtl.mostrar = (req, res) => {
    res.render('detalle_encomiendas/agregar');
}

//mandar
detalle_encomiendaCtl.mandar = async (req, res) => {
    const id = req.user.id_terminal
    const { nombres_cooperativa_detalle_encomienda,tamaño_detalle_encomienda,fecha_envio_detalle_encomienda,numero_registro_detalle_encomienda,peso_detalle_encomienda} = req.body
    const nuevoEnvio = {
        nombres_cooperativa_detalle_encomienda,
        tamaño_detalle_encomienda,
        fecha_envio_detalle_encomienda,
        numero_registro_detalle_encomienda,
        peso_detalle_encomienda
    }
    await orm.detalle_encomienda.create(nuevoEnvio)
    req.flash('success', 'Guardado exitosamente')
    res.redirect('/detalle_encomiendas/listar/' + id)
}

detalle_encomiendaCtl.listar = async (req, res) => {
    const lista = await sql.query('select * from detalle_encomiendas')
    res.render('detalle_encomiendas/listar', { lista })
}

//traer datos
detalle_encomiendaCtl.traer = async (req, res) => {
    const ids = req.params.id
    const lista = await sql.query('select * from detalle_encomiendas where id_detalle_encomienda =?', [ids])
    res.render('detalle_encomiendas/editar', { lista })
}

detalle_encomiendaCtl.actualizar = async (req, res) => {
    const id = req.user.id_terminal
    const ids = req.params.id
    const { nombres_cooperativa_detalle_encomienda,tamaño_detalle_encomienda,fecha_envio_detalle_encomienda,numero_registro_detalle_encomienda,peso_detalle_encomienda} = req.body
    const nuevoEnvio = {
        nombres_cooperativa_detalle_encomienda,
        tamaño_detalle_encomienda,
        fecha_envio_detalle_encomienda,
        numero_registro_detalle_encomienda,
        peso_detalle_encomienda
    }
    await orm.detalle_encomienda.findOne({ where: { id_detalle_encomienda: ids } })
        .then(actualizar => {
            actualizar.update(nuevoEnvio)
        })
    req.flash('success', 'Actualizado exitosamente')
    res.redirect('/detalle_encomiendas/listar/' + id);
}
detalle_encomiendaCtl.eliminar = async (req, res) => {
    const ids = req.params.id
    const id = req.user.id_usuario
    await orm.detalle_encomienda.destroy({ where: { id_detalle_encomienda: ids } })
        .then(() => {
            req.flash('success', 'Eliminado exitosamente')
            res.redirect('/detalle_encomiendas/listar/' + id);
        })
}


module.exports = detalle_encomiendaCtl