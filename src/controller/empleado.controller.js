//no modificar
const empleadoCtl = {}
const sql = require('../Database/dataBase.sql')
const orm = require('../Database/dataBase.orm')


empleadoCtl.mostrar = (req, res) => {
    res.render('empleado/agregar');
}

//mandar
empleadoCtl.mandar = async (req, res) => {
    const id =req.id_empleado  //ojo
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
    res.redirect('/empleado/listar/')
}

empleadoCtl.listar = async (req, res) => {
    const lista = await sql.query('select * from empleados')
    res.render('empleado/listar', { lista })
}

//traer datos
empleadoCtl.traer = async (req, res) => {
    const ids = req.params.id
    const lista = await sql.query('select * from empleados where id_empleado =?', [ids])
    res.render('empleado/editar', { lista })
}

empleadoCtl.actualizar = async (req, res) => {
    const ids=req.params.id
    const {nombres_empleado,apellido_empleado,cedula_empleado,fecha_nacimiento_empleado,sexo_empleado,calle_principal_empleado,calle_secundaria,email_empleado,celular_empleado,telefono_empleado,area_empleado} = req.body
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
    await orm.empleado.findOne({ where:{id_empleado:ids} })
        .then(actualizar => {
            actualizar.update(nuevoEnvio)
        })
    req.flash('success', 'Actualizado exitosamente')
    res.redirect('/empleado/listar/');
}
//correcion
empleadoCtl.eliminar = async (req, res) => {
    const ids = req.params.id
    await orm.empleado.destroy({ where: { id_empleado: ids } })
        .then(() => {
            req.flash('success', 'Eliminado exitosamente')
            res.redirect('/empleado/listar/' );
        })
}


module.exports = empleadoCtl