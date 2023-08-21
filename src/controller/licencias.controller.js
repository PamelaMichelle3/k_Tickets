const licenciaCtl = {}
const sql = require('../Database/dataBase.sql')
const orm = require('../Database/dataBase.orm')

licenciaCtl.mostrar = (req, res) => {
    res.render('licencias/agregar');
}

//mandar
licenciaCtl.mandar = async (req, res) => {
    const id = req.user.id_terminal
    const { tipo_licencia,fecha_emision_licencia,fecha_vencimiento_licencia  } = req.body
    const nuevoEnvio = {
        tipo_licencia,
        fecha_emision_licencia,
        fecha_vencimiento_licencia
    }
    await orm.licencia.create(nuevoEnvio)
    req.flash('success', 'Guardado exitosamente')
    res.redirect('/licencias/listar/' + id)
}

licenciaCtl.listar = async (req, res) => {
    const lista = await sql.query('select * from licencias')
    res.render('licencias/listar', { lista })
}

//traer datos
licenciaCtl.traer = async (req, res) => {
    const ids = req.params.id
    const lista = await sql.query('select * from licencias where id_licencia =?', [ids])
    res.render('licencias/editar', { lista })
}

licenciaCtl.actualizar = async (req, res) => {
    const id = req.user.id_terminal
    const ids = req.params.id
    const { tipo_licencia,fecha_emision_licencia,fecha_vencimiento_licencia } = req.body
    const nuevoEnvio = {
        tipo_licencia,
        fecha_emision_licencia,
        fecha_vencimiento_licencia
    }
    await orm.licencia.findOne({ where: { id_licencia: ids } })
        .then(actualizar => {
            actualizar.update(nuevoEnvio)
        })
    req.flash('success', 'Actualizado exitosamente')
    res.redirect('/licencias/listar/' + id);
}
licenciaCtl.eliminar = async (req, res) => {
    const ids = req.params.id
    const id = req.user.id_usuario
    await orm.licencia.destroy({ where: { id_licencia: ids } })
        .then(() => {
            req.flash('success', 'Eliminado exitosamente')
            res.redirect('/licencias/listar/' + id);
        })
}


module.exports = licenciaCtl