const encomienda_destinatarioCtl = {}
const sql = require('../Database/dataBase.sql')
const orm = require('../Database/dataBase.orm')

encomienda_destinatarioCtl.mostrar = (req, res) => {
    res.render('cooperativas/agregar');
}

//mandar
encomienda_destinatarioCtl.mandar = async (req, res) => {
    const id = req.user.id_terminal
    const { nombres_encomienda_destinatario,cedula_encomienda_destinatario,calle_principal_encomienda_destinatario,calle_secundaria,telefono_encomienda_destinatario,numero_casa_encomienda_destinatario} = req.body
    const nuevoEnvio = {
        nombres_encomienda_destinatario,
        cedula_encomienda_destinatario,
        calle_principal_encomienda_destinatario,
        calle_secundaria,
       telefono_encomienda_destinatario,
       numero_casa_encomienda_destinatario
    }
    await orm.encomienda_destinatario.create(nuevoEnvio)
    req.flash('success', 'Guardado exitosamente')
    res.redirect('/encomienda_destinatarios/listar/' + id)
}

encomienda_destinatarioCtl.listar = async (req, res) => {
    const lista = await sql.query('select * from encomienda_destinatarios')
    res.render('encomienda_destinatarios/listar', { lista })
}

//traer datos
encomienda_destinatarioCtl.traer = async (req, res) => {
    const ids = req.params.id
    const lista = await sql.query('select * from encomienda_destinatarios where id_encomienda_destinatario =?', [ids])
    res.render('encomienda_destinatarios/editar', { lista })
}

encomienda_destinatarioCtl.actualizar = async (req, res) => {
    const id = req.user.id_terminal
    const ids = req.params.id
    const { nombres_encomienda_destinatario,cedula_encomienda_destinatario,calle_principal_encomienda_destinatario,calle_secundaria,telefono_encomienda_destinatario,numero_casa_encomienda_destinatario} = req.body
    const nuevoEnvio = {
        nombres_encomienda_destinatario,
        cedula_encomienda_destinatario,
        calle_principal_encomienda_destinatario,
        calle_secundaria,
       telefono_encomienda_destinatario,
       numero_casa_encomienda_destinatario
    }
    await orm.encomienda_destinatario.findOne({ where: { id_encomienda_destinatario: ids } })
        .then(actualizar => {
            actualizar.update(nuevoEnvio)
        })
    req.flash('success', 'Actualizado exitosamente')
    res.redirect('/encomienda_destinatarios/listar/' + id);
}
encomienda_destinatarioCtl.eliminar = async (req, res) => {
    const ids = req.params.id
    const id = req.user.id_usuario
    await orm.encomienda_destinatario.destroy({ where: { id_encomienda_destinatario: ids } })
        .then(() => {
            req.flash('success', 'Eliminado exitosamente')
            res.redirect('/encomienda_destinatarios/listar/' + id);
        })
}


module.exports = encomienda_destinatarioCtl