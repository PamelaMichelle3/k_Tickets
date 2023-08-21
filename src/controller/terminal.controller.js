const terminalCtl = {}
const sql = require('../Database/dataBase.sql')
const orm = require('../Database/dataBase.orm')

terminalCtl.mostrar = (req, res) => {
    res.render('terminales/agregar');
}

//mandar
terminalCtl.mandar = async (req, res) => {
    const id = req.user.id_terminal
    const { nombre_terminal,calle_principal_terminal,calle_secundaria_terminal,username_terminal,password_terminal } = req.body
    const nuevoEnvio = {
        nombre_terminal,
        calle_principal_terminal,
        calle_secundaria_terminal,
        username_terminal,
        password_terminal
    }
    await orm.terminal.create(nuevoEnvio)
    req.flash('success', 'Guardado exitosamente')
    res.redirect('/terminales/listar/' + id)
}

terminalCtl.listar = async (req, res) => {
    const lista = await sql.query('select * from terminales')
    res.render('terminales/listar', { lista })
}

//traer datos
terminalCtl.traer = async (req, res) => {
    const ids = req.params.id
    const lista = await sql.query('select * from terminales where id_terminal =?', [ids])
    res.render('terminales/editar', { lista })
}

terminalCtl.actualizar = async (req, res) => {
    const id = req.user.id_terminal
    const ids = req.params.id
    const { nombre_terminal,calle_principal_terminal,calle_secundaria_terminal,username_terminal,password_terminal } = req.body
    const nuevoEnvio = {
        nombre_terminal,
        calle_principal_terminal,
        calle_secundaria_terminal,
        username_terminal,
        password_terminal
    }
    await orm.terminal.findOne({ where: { id_terminal: ids } })
        .then(actualizar => {
            actualizar.update(nuevoEnvio)
        })
    req.flash('success', 'Actualizado exitosamente')
    res.redirect('/terminales/listar/' + id);
}
terminalCtl.eliminar = async (req, res) => {
    const ids = req.params.id
    const id = req.user.id_usuario
    await orm.ruta.destroy({ where: { id_terminal: ids } })
        .then(() => {
            req.flash('success', 'Eliminado exitosamente')
            res.redirect('/terminal/listar/' + id);
        })
}


module.exports = terminalCtl