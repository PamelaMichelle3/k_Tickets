const choferCtl = {}
const sql = require('../Database/dataBase.sql')
const orm = require('../Database/dataBase.orm')

choferCtl.mostrar = (req, res) => {
    res.render('chofer/agregar');
}

//mandar
choferCtl.mandar = async (req, res) => {
    const { cedula_chofer, nombre_chofer, apellido_chofer, sexo_chofer, estado_civil_chofer, fecha_nacimiento_chofer, direccion_chofer, email_chofer, celular_chofer, tipo_licencia,fecha_emision_licencia,fecha_vencimiento_licencia  } = req.body
    const nuevoEnvio = {
        cedula_chofer, 
        nombre_chofer, 
        apellido_chofer, 
        sexo_chofer, 
        estado_civil_chofer, 
        fecha_nacimiento_chofer, 
        direccion_chofer, 
        email_chofer, 
        celular_chofer,
        //licencia
        tipo_licencia,
        fecha_emision_licencia,
        fecha_vencimiento_licencia
    }
    await orm.chofer.create(nuevoEnvio)
    req.flash('success', 'Guardado exitosamente')
    res.redirect('/chofer/listar/')
}

choferCtl.listar = async (req, res) => {
    const lista = await sql.query('select * from choferes')
    res.render('chofer/listar', { lista })
}

//traer datos
choferCtl.traer = async (req, res) => {
    const ids = req.params.id
    const lista = await sql.query('select * from choferes where id_chofer =?', [ids])
    res.render('chofer/editar', { lista })
}

choferCtl.actualizar = async (req, res) => {
    const id = req.user.id_terminal
    const ids = req.params.id
    const { cedula_chofer, nombre_chofer, apellido_chofer, sexo_chofer, estado_civil_chofer, fecha_nacimiento_chofer, direccion_chofer, email_chofer, celular_chofer,tipo_licencia,fecha_emision_licencia,fecha_vencimiento_licencia  } = req.body
    const nuevoEnvio = {
        cedula_chofer, 
        nombre_chofer, 
        apellido_chofer, 
        sexo_chofer, 
        estado_civil_chofer, 
        fecha_nacimiento_chofer, 
        direccion_chofer, 
        email_chofer, 
        celular_chofer,
        //licencia
        tipo_licencia,
        fecha_emision_licencia,
        fecha_vencimiento_licencia
    }
    await orm.chofer.findOne({ where: { id_chofer: id } })
        .then(actualizar => {
            actualizar.update(nuevoEnvio)
        })
    req.flash('success', 'Actualizado exitosamente')
    res.redirect('/chofer/listar/');
}
choferCtl.eliminar = async (req, res) => {
    const ids = req.params.id
    const id = req.user.id_usuario
    await orm.chofer.destroy({ where: { id_chofer: id } })
        .then(() => {
            req.flash('success', 'Eliminado exitosamente')
            res.redirect('/chofer/listar/' + id);
        })
}


module.exports = choferCtl