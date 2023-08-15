const rutasCtl = {}
const sql = require('../Database/dataBase.sql')
const orm = require('../Database/dataBase.orm')


rutasCtl.Mostrar = (req, res) => {
    res.render('rutas');
}

rutasCtl.mandar = async(req, res)=>{
    const { nombre_partida, nombre_destino, horariosr} = req.body
    const nuevaRuta ={
        nombre_partida, 
        nombre_destino, 
        horariosr
    }
    await orm.rutas.create(nuevaRuta)
    req.flash('success', 'Guardado con exito')
    res.redirect('/rutas');
}
module.exports  = rutasCtl