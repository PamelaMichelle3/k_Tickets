const encargadoCtl = {}
const sql = require('../Database/dataBase.sql')
const orm = require('../Database/dataBase.orm')


encargadoCtl.Mostrar = (req, res) => {
    res.render('encargado/agregar');
}

encargadoCtl.mandar = async(req, res)=>{
    const { nombres_encargado, apellidos_encargado, nro_cedula, sexo_encargado, telefono_celular, telefono_convencional} = req.body
    const nuevoEncargado ={
        nombres_encargado, 
        apellidos_encargado, 
        nro_cedula, 
        sexo_encargado, 
        telefono_celular, 
        telefono_convencional
    }
    await orm.encargado.create(nuevoEncargado)
    req.flash('success', 'Guardado con exito')
    res.redirect('/encargado/lista');
}

encargado.lista = async(req, res) => {
    const lista = await sql.query('select * from encargados')
    res.render('encargado/lista', { lista })
}

encargado.traer = async(req, res) => {
    const ids = req.params.id
    const lista = await sql.query('select * from encargados where id_encargados=?', [ids])
    res.render('encargado/editar', { lista })
}


encargado.actualizar = async(req, res) => {

    const { id_encargados, nombres_encargado, apellidos_encargado, nro_cedula, sexo_encargado, telefono_celular, telefono_convencional } = req.body
    const nuevoEncargado = {
        nombres_encargado, 
        apellidos_encargado, 
        nro_cedula, 
        sexo_encargado, 
        telefono_celular, 
        telefono_convencional
    }
    await orm.encargado.findOne({ where: { id_encargados: id_encargados } })
        .then(actualizar => {
            actualizar.update(nuevoEncargado)
        })
    req.flash('success', 'Actualizado con éxito')
    res.redirect('/encargado/lista')
}

adopcion.eliminar = async(req, res) => {
    const ids = req.params.id
    await orm.encargado.destroy({ where: { id_encargados: ids } })
        .then(() => {
            req.flash('success', 'Eliminado con éxito')
            res.redirect('/encargado/lista')
        })
}

module.exports  = encargadoCtl