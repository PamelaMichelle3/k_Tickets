const cooperativaCtl = {}
const sql = require('../Database/dataBase.sql')
const orm = require('../Database/dataBase.orm')

cooperativaCtl.mostrar = (req, res) => {
    res.render('cooperativas/agregar');
}

//mandar
cooperativaCtl.mandar = async (req, res) => {
    const id = req.user.id_terminal
    const { nombres_cooperativa, numero_identificacion_cooperativa, numero_transporte_cooperativa,horario_cooperativa,contactos_cooperativa,email_cooperativa} = req.body
    const nuevoEnvio = {
        nombres_cooperativa,
        numero_identificacion_cooperativa,
        numero_transporte_cooperativa,
        horario_cooperativa,
        contactos_cooperativa,
        email_cooperativa
    }
    await orm.cooperativa.create(nuevoEnvio)
    req.flash('success', 'Guardado exitosamente')
    res.redirect('/cooperativas/listar/' + id)
}

cooperativaCtl.listar = async (req, res) => {
    const lista = await sql.query('select * from cooperativas')
    res.render('cooperativas/listar', { lista })
}

//traer datos
cooperativaCtl.traer = async (req, res) => {
    const ids = req.params.id
    const lista = await sql.query('select * from cooperativas where id_cooperativa =?', [ids])
    res.render('cooperativas/editar', { lista })
}

cooperativaCtl.actualizar = async (req, res) => {
    const id = req.user.id_terminal
    const ids = req.params.id
    const { nombres_cooperativa, numero_identificacion_cooperativa, numero_transporte_cooperativa,horario_cooperativa,contactos_cooperativa,email_cooperativa} = req.body
    const nuevoEnvio = {
        nombres_cooperativa,
        numero_identificacion_cooperativa,
        numero_transporte_cooperativa,
        horario_cooperativa,
        contactos_cooperativa,
        email_cooperativa
    }
    await orm.cooperativa.findOne({ where: { id_cooperativa: ids } })
        .then(actualizar => {
            actualizar.update(nuevoEnvio)
        })
    req.flash('success', 'Actualizado exitosamente')
    res.redirect('/cooperativas/listar/' + id);
}
cooperativaCtl.eliminar = async (req, res) => {
    const ids = req.params.id
    const id = req.user.id_usuario
    await orm.cooperativa.destroy({ where: { id_cooperativa: ids } })
        .then(() => {
            req.flash('success', 'Eliminado exitosamente')
            res.redirect('/cooperativas/listar/' + id);
        })
}


module.exports = cooperativaCtl