const detalle_encomiendaCtl = {}
const sql = require('../Database/dataBase.sql')
const orm = require('../Database/dataBase.orm')


detalle_encomiendaCtl.Mostrar = (req, res) => {
    res.render('detalle_encomienda/agregar');
}

detalle_encomiendaCtl.mandar = async(req, res)=>{
    const { nombre_cooperativad, tamaño_encomienda, fecha_envio, nro_registro_transporte, peso} = req.body
    const nuevoDetalle_encomienda ={
        nombre_cooperativad, 
        tamaño_encomienda, 
        fecha_envio, 
        nro_registro_transporte, 
        peso
    }
    await orm.detalle_encomienda.create(nuevoDetalle_encomienda)
    req.flash('success', 'Guardado con exito')
    res.redirect('/detalle_encomienda/lista');
}

detalle_encomienda.lista = async(req, res) => {
    const lista = await sql.query('select * from detalle_encomienda')
    res.render('detalle_encomienda/lista', { lista })
}

detalle_encomienda.traer = async(req, res) => {
    const ids = req.params.id
    const lista = await sql.query('select * from detalle_encomienda where id_detalle_encomienda=?', [ids])
    res.render('detalle_encomienda/editar', { lista })
}


detalle_encomienda.actualizar = async(req, res) => {

    const { id_detalle_encomienda, nombre_cooperativad, tamaño_encomienda, fecha_envio, nro_registro_transporte, peso} = req.body
    const nuevoDetalle_encomienda = {
        nombre_cooperativad, 
        tamaño_encomienda, 
        fecha_envio, 
        nro_registro_transporte, 
        peso
    }
    await orm.detalle_encomienda.findOne({ where: { id_detalle_encomienda: id_detalle_encomienda } })
        .then(actualizar => {
            actualizar.update(nuevoDetalle_encomienda)
        })
    req.flash('success', 'Actualizado con éxito')
    res.redirect('/detalle_encomienda/lista')
}

detalle_encomienda.eliminar = async(req, res) => {
    const ids = req.params.id
    await orm.detalle_encomienda.destroy({ where: { id_detalle_encomienda: ids } })
        .then(() => {
            req.flash('success', 'Eliminado con éxito')
            res.redirect('/detalle_encomienda/lista')
        })
}

module.exports  = detalle_encomiendaCtl