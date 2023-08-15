const busesCtl = {}
const sql = require('../Database/dataBase.sql')
const orm = require('../Database/dataBase.orm')


busesCtl.Mostrar = (req, res) => {
    res.render('buses/agregar');
}

busesCtl.mandar = async(req, res)=>{
    const { nombre_conductor, capacidad, horariosb, placa} = req.body
    const nuevobuses ={
        nombre_conductor, 
        capacidad, 
        horariosb, 
        placa
    }
    await orm.buses.create(nuevobuses)
    req.flash('success', 'Guardado con exito')
    res.redirect('/buses/lista');
}

buses.lista = async(req, res) => {
    const lista = await sql.query('select * from buses')
    res.render('buses/lista', { lista })
}

buses.traer = async(req, res) => {
    const ids = req.params.id
    const lista = await sql.query('select * from buses where id_buses=?', [ids])
    res.render('buses/editar', { lista })
}


buses.actualizar = async(req, res) => {

    const { id_buses, nombre_conductor, capacidad, horariosb, placa} = req.body
    const nuevobuses = {
        nombre_conductor, 
        capacidad, 
        horariosb, 
        placa
    }
    await orm.buses.findOne({ where: { id_buses: id_buses } })
        .then(actualizar => {
            actualizar.update(nuevobuses)
        })
    req.flash('success', 'Actualizado con éxito')
    res.redirect('/buses/lista')
}

buses.eliminar = async(req, res) => {
    const ids = req.params.id
    await orm.buses.destroy({ where: { id_buses: ids } })
        .then(() => {
            req.flash('success', 'Eliminado con éxito')
            res.redirect('/buses/lista')
        })
}

module.exports  = busesCtl