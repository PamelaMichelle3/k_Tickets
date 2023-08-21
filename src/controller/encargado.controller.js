const encargadoCtl = {}
const sql = require('../Database/dataBase.sql')
const orm = require('../Database/dataBase.orm')

empleadoCtl.mostrar = (req, res) => {
    res.render('encargados/agregar');
}

//mandar
encargadoCtl.mandar = async (req, res) => {
    const id = req.user.id_terminal
    const { nombres_encargado,apellido_encargado,cedula_encargado,sexo_encargado,celular_encargado,telefono_encargado} = req.body
    const nuevoEnvio = {
        nombres_encargado,
        apellido_encargado,
        cedula_encargado,
        sexo_encargado,
       celular_encargado,
       telefono_encargado
        }
    await orm.encargado.create(nuevoEnvio)
    req.flash('success', 'Guardado exitosamente')
    res.redirect('/encargados/listar/' + id)
}

encargadoCtl.listar = async (req, res) => {
    const lista = await sql.query('select * from encargados')
    res.render('encargados/listar', { lista })
}

//traer datos
encargadoCtl.traer = async (req, res) => {
    const ids = req.params.id
    const lista = await sql.query('select * from encargados where id_encargado =?', [ids])
    res.render('encargados/editar', { lista })
}

encargadoCtl.actualizar = async (req, res) => {
    const id = req.user.id_terminal
    const ids = req.params.id
    const { nombres_encargado,apellido_encargado,cedula_encargado,sexo_encargado,celular_encargado,telefono_encargado} = req.body
    const nuevoEnvio = {
        nombres_encargado,
        apellido_encargado,
        cedula_encargado,
        sexo_encargado,
       celular_encargado,
       telefono_encargado
    }
    await orm.encargado.findOne({ where: { id_encargado: ids } })
        .then(actualizar => {
            actualizar.update(nuevoEnvio)
        })
    req.flash('success', 'Actualizado exitosamente')
    res.redirect('/encargados/listar/' + id);
}
encargadoCtl.eliminar = async (req, res) => {
    const ids = req.params.id
    const id = req.user.id_usuario
    await orm.encargado.destroy({ where: { id_encargado: ids } })
        .then(() => {
            req.flash('success', 'Eliminado exitosamente')
            res.redirect('/encargados/listar/' + id);
        })
}


module.exports = encargadoCtl