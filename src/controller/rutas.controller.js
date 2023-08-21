const rutaCtl = {}
const sql = require('../Database/dataBase.sql')
const orm = require('../Database/dataBase.orm')

rutaCtl.mostrar = (req, res) => {
    res.render('rutas/agregar');
}

//mandar
rutaCtl.mandar = async (req, res) => {
    const id = req.user.id_terminal
    const { partida_ruta,destina_ruta,horario_ruta } = req.body
    const nuevoEnvio = {
        partida_ruta,
        destina_ruta,
        horario_ruta
    }
    await orm.ruta.create(nuevoEnvio)
    req.flash('success', 'Guardado exitosamente')
    res.redirect('/rutas/listar/' + id)
}

rutaCtl.listar = async (req, res) => {
    const lista = await sql.query('select * from rutas')
    res.render('rutas/listar', { lista })
}

//traer datos
rutaCtl.traer = async (req, res) => {
    const ids = req.params.id
    const lista = await sql.query('select * from rutas where id_ruta =?', [ids])
    res.render('rutas/editar', { lista })
}

rutaCtl.actualizar = async (req, res) => {
    const id = req.user.id_terminal
    const ids = req.params.id
    const { partida_ruta,destina_ruta,horario_ruta } = req.body
    const nuevoEnvio = {
        partida_ruta,
        destina_ruta,
        horario_ruta
    }
    await orm.ruta.findOne({ where: { id_ruta: ids } })
        .then(actualizar => {
            actualizar.update(nuevoEnvio)
        })
    req.flash('success', 'Actualizado exitosamente')
    res.redirect('/rutas/listar/' + id);
}
rutaCtl.eliminar = async (req, res) => {
    const ids = req.params.id
    const id = req.user.id_usuario
    await orm.ruta.destroy({ where: { id_ruta: ids } })
        .then(() => {
            req.flash('success', 'Eliminado exitosamente')
            res.redirect('/rutas/listar/' + id);
        })
}


module.exports = rutaCtl