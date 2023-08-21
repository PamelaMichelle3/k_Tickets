const choferCtl = {}
const sql = require('../Database/dataBase.sql')
const orm = require('../Database/dataBase.orm')

choferCtl.mostrar = (req, res) => {
    res.render('choferes/agregar');
}

//mandar
choferCtl.mandar = async (req, res) => {
    const id = req.user.id_terminal
    const { cedula_chofer, nombre_chofer, apellido_chofer, sexo_chofer, estado_civil_chofer, fecha_nacimiento_chofer, direccion_chofer, email_chofer, celular_chofer } = req.body
    const nuevoEnvio = {
        cedula_chofer, 
        nombre_chofer, 
        apellido_chofer, 
        sexo_chofer, 
        estado_civil_chofer, 
        fecha_nacimiento_chofer, 
        direccion_chofer, 
        email_chofer, 
        celular_chofer
    }
    await orm.chofer.create(nuevoEnvio)
    req.flash('success', 'Guardado exitosamente')
    res.redirect('/choferes/listar/' + id)
}

choferCtl.listar = async (req, res) => {
    const lista = await sql.query('select * from choferes')
    res.render('choferes/listar', { lista })
}

//traer datos
choferCtl.traer = async (req, res) => {
    const ids = req.params.id
    const lista = await sql.query('select * from choferes where id_chofer =?', [ids])
    res.render('choferes/editar', { lista })
}

choferCtl.actualizar = async (req, res) => {
    const id = req.user.id_terminal
    const ids = req.params.id
    const { cedula_chofer, nombre_chofer, apellido_chofer, sexo_chofer, estado_civil_chofer, fecha_nacimiento_chofer, direccion_chofer, email_chofer, celular_chofer } = req.body
    const nuevoEnvio = {
        cedula_chofer, 
        nombre_chofer, 
        apellido_chofer, 
        sexo_chofer, 
        estado_civil_chofer, 
        fecha_nacimiento_chofer, 
        direccion_chofer, 
        email_chofer, 
        celular_chofer
    }
    await orm.chofer.findOne({ where: { id_chofer: ids } })
        .then(actualizar => {
            actualizar.update(nuevoEnvio)
        })
    req.flash('success', 'Actualizado exitosamente')
    res.redirect('/choferes/listar/' + id);
}
choferCtl.eliminar = async (req, res) => {
    const ids = req.params.id
    const id = req.user.id_usuario
    await orm.chofer.destroy({ where: { id_chofer: ids } })
        .then(() => {
            req.flash('success', 'Eliminado exitosamente')
            res.redirect('/choferes/listar/' + id);
        })
}


module.exports = choferCtl