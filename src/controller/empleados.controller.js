const empleadoCtl = {}
const sql = require('../Database/dataBase.sql')
const orm = require('../Database/dataBase.orm')


empleadoCtl.Mostrar = (req, res) => {
    res.render('empleado/agregar');
}

empleadoCtl.mandar = async(req, res)=>{
    const { cedulaem, nombrese, apellidose, fecha_nacimientoe, sexoe, callepe, callese, correoe, celulare, convencionale, area} = req.body
    const nuevoEmpleado ={
        cedulaem, 
        nombrese, 
        apellidose, 
        fecha_nacimientoe, 
        sexoe, 
        callepe, 
        callese, 
        correoe, 
        celulare, 
        convencionale, 
        area
    }
    await orm.empleado.create(nuevoEmpleado)
    req.flash('success', 'Guardado con exito')
    res.redirect('/empleado/lista');
}

empleado.lista = async(req, res) => {
    const lista = await sql.query('select * from empleados')
    res.render('empleado/lista', { lista })
}

empleado.traer = async(req, res) => {
    const ids = req.params.id
    const lista = await sql.query('select * from empleados where id_empleados=?', [ids])
    res.render('empleado/editar', { lista })
}


empleado.actualizar = async(req, res) => {

    const { id_empleados, cedulaem, nombrese, apellidose, fecha_nacimientoe, sexoe, callepe, callese, correoe, celulare, convencionale, area } = req.body
    const nuevoEmpleado = {
        cedulaem, 
        nombrese, 
        apellidose, 
        fecha_nacimientoe, 
        sexoe, 
        callepe, 
        callese, 
        correoe, 
        celulare, 
        convencionale, 
        area
    }
    await orm.empleado.findOne({ where: { id_empleados: id_empleados } })
        .then(actualizar => {
            actualizar.update(nuevoEmpleado)
        })
    req.flash('success', 'Actualizado con éxito')
    res.redirect('/empleado/lista')
}

adopcion.eliminar = async(req, res) => {
    const ids = req.params.id
    await orm.empleado.destroy({ where: { id_empleados: ids } })
        .then(() => {
            req.flash('success', 'Eliminado con éxito')
            res.redirect('/empleado/lista')
        })
}

module.exports  = empleadoCtl