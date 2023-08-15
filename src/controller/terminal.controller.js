const terminalCtl = {}
const sql = require('../Database/dataBase.sql')
const orm = require('../Database/dataBase.orm')


terminalCtl.Mostrar = (req, res) => {
    res.render('terminal/agregar');
}

terminalCtl.mandar = async(req, res)=>{
    const { nombret, callept, callest, username, contraseña} = req.body
    const nuevoTerminal ={
        nombret, 
        callept, 
        callest, 
        username, 
        contraseña
    }
    await orm.terminal.create(nuevoTerminal)
    req.flash('success', 'Guardado con exito')
    res.redirect('/terminal/lista');
}

terminal.lista = async(req, res) => {
    const lista = await sql.query('select * from terminal')
    res.render('terminal/lista', { lista })
}

terminal.traer = async(req, res) => {
    const ids = req.params.id
    const lista = await sql.query('select * from terminal where id_terminal=?', [ids])
    res.render('terminal/editar', { lista })
}


terminal.actualizar = async(req, res) => {

    const { id_terminal, nombret, callept, callest, username, contraseña} = req.body
    const nuevoTerminal = {
        nombret, 
        callept, 
        callest, 
        username, 
        contraseña
    }
    await orm.terminal.findOne({ where: { id_terminal: id_terminal } })
        .then(actualizar => {
            actualizar.update(nuevoTerminal)
        })
    req.flash('success', 'Actualizado con éxito')
    res.redirect('/terminal/lista')
}

terminal.eliminar = async(req, res) => {
    const ids = req.params.id
    await orm.terminal.destroy({ where: { id_terminal: ids } })
        .then(() => {
            req.flash('success', 'Eliminado con éxito')
            res.redirect('/terminal/lista')
        })
}

module.exports  = terminalCtl