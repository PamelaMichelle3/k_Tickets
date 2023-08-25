const encomienda_remitenteCtl = {}
const sql = require('../Database/dataBase.sql')
const orm = require('../Database/dataBase.orm')

encomienda_remitenteCtl.mostrar = (req, res) => {
    res.render('encomienda/agregar');
}

//mandar
encomienda_remitenteCtl.mandar = async (req, res) => {
    const id = req.user.id_terminal
    const { nombres_encomienda_remitente,cedula_encomienda_remitente,telefono_encomienda_remitente,email_encomienda_remitente,
        nombres_cooperativa_detalle_encomienda,tamano_detalle_encomienda,fecha_envio_detalle_encomienda,numero_registro_detalle_encomienda,peso_detalle_encomienda,
        nombres_encomienda_destinatario,cedula_encomienda_destinatario,calle_principal_encomienda_destinatario,calle_secundaria,telefono_encomienda_destinatario,numero_casa_encomienda_destinatario} = req.body
    const nuevoEnvio = {
        nombres_encomienda_remitente,
        cedula_encomienda_remitente,
        telefono_encomienda_remitente,
        email_encomienda_remitente,
        //detalle encomienda 
        nombres_cooperativa_detalle_encomienda,
        tamano_detalle_encomienda,
        fecha_envio_detalle_encomienda,
        numero_registro_detalle_encomienda,
        peso_detalle_encomienda,
        //encomienda destinatario
        nombres_encomienda_destinatario,
        cedula_encomienda_destinatario,
        calle_principal_encomienda_destinatario,
        calle_secundaria,
       telefono_encomienda_destinatario,
       numero_casa_encomienda_destinatario
    }
    await orm.encomienda_remitente.create(nuevoEnvio)
    req.flash('success', 'Guardado exitosamente')
    res.redirect('/encomienda/listar/' + id)
}

encomienda_remitenteCtl.listar = async (req, res) => {
    const lista = await sql.query('select * from encomienda_remitentes')
    res.render('encomienda/listar', { lista })
}

//traer datos
encomienda_remitenteCtl.traer = async (req, res) => {
    const ids = req.params.id
    const lista = await sql.query('select * from encomienda_remitentes where id_encomienda_remitente =?', [ids])
    res.render('encomienda/editar', { lista })
}

encomienda_remitenteCtl.actualizar = async (req, res) => {
    const id = req.user.id_terminal
    const ids = req.params.id
    const {nombres_encomienda_remitente,cedula_encomienda_remitente,telefono_encomienda_remitente,email_encomienda_remitente,
        nombres_cooperativa_detalle_encomienda,tamano_detalle_encomienda,fecha_envio_detalle_encomienda,numero_registro_detalle_encomienda,peso_detalle_encomienda,
        nombres_encomienda_destinatario,cedula_encomienda_destinatario,calle_principal_encomienda_destinatario,calle_secundaria,telefono_encomienda_destinatario,numero_casa_encomienda_destinatario} = req.body
    const nuevoEnvio = {
        nombres_encomienda_remitente,
        cedula_encomienda_remitente,
        telefono_encomienda_remitente,
        email_encomienda_remitente,
         //detalle encomienda 
         nombres_cooperativa_detalle_encomienda,
         tamano_detalle_encomienda,
         fecha_envio_detalle_encomienda,
         numero_registro_detalle_encomienda,
         peso_detalle_encomienda,
         //encomienda destinatario
         nombres_encomienda_destinatario,
         cedula_encomienda_destinatario,
         calle_principal_encomienda_destinatario,
         calle_secundaria,
        telefono_encomienda_destinatario,
        numero_casa_encomienda_destinatario
    }
    await orm.encomienda_remitente.findOne({ where: { id_encomienda_remitente: ids } })
        .then(actualizar => {
            actualizar.update(nuevoEnvio)
        })
    req.flash('success', 'Actualizado exitosamente')
    res.redirect('/encomienda/listar/' + id);
}
encomienda_remitenteCtl.eliminar = async (req, res) => {
    const ids = req.params.id
    const id = req.user.id_usuario
    await orm.encomienda_remitente.destroy({ where: { id_encomienda_remitente: ids } })
        .then(() => {
            req.flash('success', 'Eliminado exitosamente')
            res.redirect('/encomienda/listar/' + id);
        })
}


module.exports = encomienda_remitenteCtl