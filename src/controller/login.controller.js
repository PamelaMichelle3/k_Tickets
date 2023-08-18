const loginCtl = {}
const sql = require('../Database/dataBase.sql')
const orm = require('../Database/dataBase.orm')


loginCtl.Mostrar =(req, res)=>{
    res.render('login');
}

loginCtl.mandar = async(req, res)=>{
    const {terminal, nombre, callep, calles, username, password } = req.body
    const nuevoEvio ={
        terminal,
        nombre,
        callep,
        calles,
        username,
        password
    }
    await orm.terminal.create(nuevoEvio)
    req.flash('success','Guardado cpn exito')
    res.redirect('/login');
}
module.exports = loginCtl