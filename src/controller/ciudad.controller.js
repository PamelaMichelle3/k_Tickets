const ciudadCtl = {}
const sql = require('../Database/dataBase.sql')
const orm = require('../Database/dataBase.orm')

ciudadCtl.mostrar = (req, res) => {
    res.render('ciudades/agregar');
}

//mandar
ciudadCtl.mandar = async (req, res) => {
    const { nombres_ciudad,provincia_ciudad, canton_ciudad} = req.body
    const nuevoEnvio = {
        nombres_ciudad,
        provincia_ciudad,
        canton_ciudad
    }
    await orm.ciudad.create(nuevoEnvio)
    req.flash('success', 'Guardado exitosamente')
    res.redirect('/ciudades');
}
module.exports  = ciudadCtl