const detalle_transporteCtl = {}
const sql = require('../Database/dataBase.sql')
const orm = require('../Database/dataBase.orm')


detalle_transporteCtl.Mostrar = (req, res) => {
    res.render('detalle_transporte/agregar');
}

detalle_transporteCtl.mandar = async(req, res)=>{
    const { nombre_cooperativa, tarifa, copiloto} = req.body
    const nuevodetalle_transporte ={
        nombre_cooperativa, 
        tarifa, 
        copiloto
    }
    await orm.detalle_transporte.create(nuevodetalle_transporte)
    req.flash('success', 'Guardado con exito')
    res.redirect('/detalle_transporte/lista');
}


module.exports  = detalle_transporteCtl