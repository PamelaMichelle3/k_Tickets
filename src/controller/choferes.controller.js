const choferCtl = {}
const sql = require('../Database/dataBase.sql')
const orm = require('../Database/dataBase.orm')


choferCtl.Mostrar = (req, res) => {
    res.render('chofer/agregar');
}

choferCtl.mandar = async(req, res)=>{
    const { cedulac, nombresc, apellidosc, sexoc, estado_civil, fecha_nacimientoe, direccion, emailc, celularc} = req.body
    const nuevoChofer ={
        cedulac, 
        nombresc, 
        apellidosc, 
        sexoc,
        estado_civil,        
        fecha_nacimientoe, 
        direccion, 
        emailc, 
        celularc
    }
    await orm.chofer.create(nuevoChofer)
    req.flash('success', 'Guardado con exito')
    res.redirect('/chofer/lista');
}

chofer.lista = async(req, res) => {
    const lista = await sql.query('select * from choferes')
    res.render('chofer/lista', { lista })
}

chofer.traer = async(req, res) => {
    const ids = req.params.id
    const lista = await sql.query('select * from choferes where id_chofer=?', [ids])
    res.render('chofer/editar', { lista })
}


chofer.actualizar = async(req, res) => {

    const { id_chofer, cedulac, nombresc, apellidosc, sexoc, estado_civil, fecha_nacimientoe, direccion, emailc, celularc} = req.body
    const nuevoChofer = {
        cedulac, 
        nombresc, 
        apellidosc, 
        sexoc,
        estado_civil,        
        fecha_nacimientoe, 
        direccion, 
        emailc, 
        celularc
    }
    await orm.chofer.findOne({ where: { id_chofer: id_chofer } })
        .then(actualizar => {
            actualizar.update(nuevoChofer)
        })
    req.flash('success', 'Actualizado con éxito')
    res.redirect('/chofer/lista')
}

chofer.eliminar = async(req, res) => {
    const ids = req.params.id
    await orm.chofer.destroy({ where: { id_chofer: ids } })
        .then(() => {
            req.flash('success', 'Eliminado con éxito')
            res.redirect('/chofer/lista')
        })
}

module.exports  = choferCtl