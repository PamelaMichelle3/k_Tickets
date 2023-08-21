const detalle_cooperativaCtl = {}
const sql = require('../Database/dataBase.sql')
const orm = require('../Database/dataBase.orm')

detalle_cooperativaCtl.mostrar = (req, res) => {
    res.render('detalle_cooperativas/agregar');
}

//mandar
detalle_cooperativaCtl.mandar = async (req, res) => {
    const id = req.user.id_terminal
    const { nombres_detalle_cooperativa, apellidos_detalle_cooperativa, email_detalle_cooperativa} = req.body
    const nuevoEnvio = {
        nombres_detalle_cooperativa,
        apellidos_detalle_cooperativa,
        email_detalle_cooperativa
        }
    await orm.detalle_cooperativa.create(nuevoEnvio)
    req.flash('success', 'Guardado exitosamente')
    res.redirect('/detalle_cooperativas/listar/' + id)
}

detalle_cooperativaCtl.listar = async (req, res) => {
    const lista = await sql.query('select * from detalle_encomiendas')
    res.render('detalle_cooperativas/listar', { lista })
}

//traer datos
detalle_cooperativaCtl.traer = async (req, res) => {
    const ids = req.params.id
    const lista = await sql.query('select * from detalle_cooperativas where id_detalle_cooperativa =?', [ids])
    res.render('detalle_cooperativas/editar', { lista })
}

detalle_cooperativaCtl.actualizar = async (req, res) => {
    const id = req.user.id_terminal
    const ids = req.params.id
    const { nombres_detalle_cooperativa, apellidos_detalle_cooperativa, email_detalle_cooperativa} = req.body
    const nuevoEnvio = {
        nombres_detalle_cooperativa,
        apellidos_detalle_cooperativa,
        email_detalle_cooperativa
    }
    await orm.detalle_cooperativa.findOne({ where: { id_detalle_cooperativa: ids } })
        .then(actualizar => {
            actualizar.update(nuevoEnvio)
        })
    req.flash('success', 'Actualizado exitosamente')
    res.redirect('/detalle_cooperativas/listar/' + id);
}
detalle_cooperativaCtl.eliminar = async (req, res) => {
    const ids = req.params.id
    const id = req.user.id_usuario
    await orm.detalle_cooperativa.destroy({ where: { id_detalle_cooperativa: ids } })
        .then(() => {
            req.flash('success', 'Eliminado exitosamente')
            res.redirect('/detalle_cooperativas/listar/' + id);
        })
}


module.exports = detalle_cooperativaCtl