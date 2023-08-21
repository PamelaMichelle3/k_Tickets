const empleadoCtl = {}
const sql = require('../Database/dataBase.sql')
const orm = require('../Database/dataBase.orm')

empleadoCtl.mostrar = (req, res) => {
    res.render('empleados/agregar');
}

//mandar
empleadoCtl.mandar = async (req, res) => {
    const id = req.user.id_terminal
    const { nombres_empleado,apellido_empleado,cedula_empleado,fecha_nacimiento_empleado,sexo_empleado,calle_principal_empleado,calle_secundaria,email_empleado,celular_empleado,telefono_empleado,area_empleado} = req.body
    const nuevoEnvio = {
        nombres_empleado,
        apellido_empleado,
        cedula_empleado,
        fecha_nacimiento_empleado,
        sexo_empleado,
        calle_principal_empleado,
        calle_secundaria,
       email_empleado,
       celular_empleado,
       telefono_empleado,
       area_empleado
        }
    await orm.empleado.create(nuevoEnvio)
    req.flash('success', 'Guardado exitosamente')
    res.redirect('/empleados/listar/' + id)
}

empleadoCtl.listar = async (req, res) => {
    const lista = await sql.query('select * from empleados')
    res.render('empleados/listar', { lista })
}

//traer datos
empleadoCtl.traer = async (req, res) => {
    const ids = req.params.id
    const lista = await sql.query('select * from empleados where id_empleado =?', [ids])
    res.render('empleados/editar', { lista })
}

empleadoCtl.actualizar = async (req, res) => {
    const id = req.user.id_terminal
    const ids = req.params.id
    const { nombres_empleado,apellido_empleado,cedula_empleado,fecha_nacimiento_empleado,sexo_empleado,calle_principal_empleado,calle_secundaria,email_empleado,celular_empleado,telefono_empleado,area_empleado} = req.body
    const nuevoEnvio = {
        nombres_empleado,
        apellido_empleado,
        cedula_empleado,
        fecha_nacimiento_empleado,
        sexo_empleado,
        calle_principal_empleado,
        calle_secundaria,
       email_empleado,
       celular_empleado,
       telefono_empleado,
       area_empleado
    }
    await orm.empleado.findOne({ where: { id_empleado: ids } })
        .then(actualizar => {
            actualizar.update(nuevoEnvio)
        })
    req.flash('success', 'Actualizado exitosamente')
    res.redirect('/empleados/listar/' + id);
}
empleadoCtl.eliminar = async (req, res) => {
    const ids = req.params.id
    const id = req.user.id_usuario
    await orm.empleado.destroy({ where: { id_empleado: ids } })
        .then(() => {
            req.flash('success', 'Eliminado exitosamente')
            res.redirect('/empleados/listar/' + id);
        })
}


module.exports = empleadoCtl