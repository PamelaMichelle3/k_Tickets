const encomienda_remitenteCtl = {}
const sql = require('../Database/dataBase.sql')
const orm = require('../Database/dataBase.orm')

encomienda_remitenteCtl.mostrar = (req, res) => {
    res.render('encomienda_remitentes/agregar');
}

//mandar
encomienda_remitenteCtl.mandar = async (req, res) => {
    const id = req.user.id_terminal
    const { nombres_encomienda_remitente,cedula_encomienda_remitente,telefono_encomienda_remitente,email_encomienda_remitente} = req.body
    const nuevoEnvio = {
        nombres_encomienda_remitente,
        cedula_encomienda_remitente,
        telefono_encomienda_remitente,
        email_encomienda_remitente
    }
    await orm.encomienda_remitente.create(nuevoEnvio)
    req.flash('success', 'Guardado exitosamente')
    res.redirect('/encomienda_remitentes/listar/' + id)
}

encomienda_remitenteCtl.listar = async (req, res) => {
    const lista = await sql.query('select * from encomienda_remitentes')
    res.render('encomienda_remitentes/listar', { lista })
}

//traer datos
encomienda_remitenteCtl.traer = async (req, res) => {
    const ids = req.params.id
    const lista = await sql.query('select * from encomienda_remitentes where id_encomienda_remitente =?', [ids])
    res.render('encomienda_remitentes/editar', { lista })
}

encomienda_remitenteCtl.actualizar = async (req, res) => {
    const id = req.user.id_terminal
    const ids = req.params.id
    const {nombres_encomienda_remitente,cedula_encomienda_remitente,telefono_encomienda_remitente,email_encomienda_remitente} = req.body
    const nuevoEnvio = {
        nombres_encomienda_remitente,
        cedula_encomienda_remitente,
        telefono_encomienda_remitente,
        email_encomienda_remitente
    }
    await orm.encomienda_remitente.findOne({ where: { id_encomienda_remitente: ids } })
        .then(actualizar => {
            actualizar.update(nuevoEnvio)
        })
    req.flash('success', 'Actualizado exitosamente')
    res.redirect('/encomienda_remitentes/listar/' + id);
}
encomienda_remitenteCtl.eliminar = async (req, res) => {
    const ids = req.params.id
    const id = req.user.id_usuario
    await orm.encomienda_remitente.destroy({ where: { id_encomienda_remitente: ids } })
        .then(() => {
            req.flash('success', 'Eliminado exitosamente')
            res.redirect('/encomienda_remitentes/listar/' + id);
        })
}


module.exports = encomienda_remitenteCtl