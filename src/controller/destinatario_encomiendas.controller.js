const destinatario_encomiendaCtl = {}
const sql = require('../Database/dataBase.sql')
const orm = require('../Database/dataBase.orm')


destinatario_encomiendaCtl.Mostrar = (req, res) => {
    res.render('destinatario_encomienda/agregar');
}

destinatario_encomiendaCtl.mandar = async(req, res)=>{
    const { nombrescompletosdes, nro_cedulades, callepd, callesd, nro_casad, nro_telefonod} = req.body
    const nuevoDestinatario_encomienda ={
        nombrescompletosdes, 
        nro_cedulades, 
        callepd, 
        callesd, 
        nro_casad, 
        nro_telefonod
    }
    await orm.destinatario_encomienda.create(nuevoDestinatario_encomienda)
    req.flash('success', 'Guardado con exito')
    res.redirect('/destinatario_encomienda/lista');
}

destinatario_encomienda.lista = async(req, res) => {
    const lista = await sql.query('select * from destinatario_encomienda')
    res.render('destinatario_encomienda/lista', { lista })
}

destinatario_encomienda.traer = async(req, res) => {
    const ids = req.params.id
    const lista = await sql.query('select * from destinatario_encomienda where id_destinatario_encomienda=?', [ids])
    res.render('destinatario_encomienda/editar', { lista })
}


destinatario_encomienda.actualizar = async(req, res) => {

    const { id_destinatario_encomienda, nombrescompletosdes, nro_cedulades, callepd, callesd, nro_casad, nro_telefonod} = req.body
    const nuevoDestinatario_encomienda = {
        nombrescompletosdes, 
        nro_cedulades, 
        callepd, 
        callesd, 
        nro_casad, 
        nro_telefonod
    }
    await orm.destinatario_encomienda.findOne({ where: { id_destinatario_encomienda: id_destinatario_encomienda } })
        .then(actualizar => {
            actualizar.update(nuevoDestinatario_encomienda)
        })
    req.flash('success', 'Actualizado con éxito')
    res.redirect('/destinatario_encomienda/lista')
}

destinatario_encomienda.eliminar = async(req, res) => {
    const ids = req.params.id
    await orm.destinatario_encomienda.destroy({ where: { id_destinatario_encomienda: ids } })
        .then(() => {
            req.flash('success', 'Eliminado con éxito')
            res.redirect('/destinatario_encomienda/lista')
        })
}

module.exports  = destinatario_encomiendaCtl