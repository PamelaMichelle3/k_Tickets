const cooperativaCtl = {}
const sql = require('../Database/dataBase.sql')
const orm = require('../Database/dataBase.orm')


cooperativaCtl.Mostrar = (req, res) => {
    res.render('cooperativa/agregar');
}

cooperativaCtl.mandar = async(req, res)=>{
    const { nombre_cooperativa, nro_identificacion_tributaria, nro_transportes, horarios_atencion, informacion_contactos, email} = req.body
    const nuevacooperativa ={
        nombre_cooperativa, 
        nro_identificacion_tributaria, 
        nro_transportes, 
        horarios_atencion, 
        informacion_contactos, 
        email
    }
    await orm.cooperativa.create(nuevacooperativa)
    req.flash('success', 'Guardado con exito')
    res.redirect('/cooperativa/lista');
}

cooperativa.lista = async(req, res) => {
    const lista = await sql.query('select * from cooperativa')
    res.render('cooperativa/lista', { lista })
}

cooperativa.traer = async(req, res) => {
    const ids = req.params.id
    const lista = await sql.query('select * from cooperativa where id_cooperativa=?', [ids])
    res.render('cooperativa/editar', { lista })
}


cooperativa.actualizar = async(req, res) => {

    const { id_cooperativa, nombre_cooperativa, nro_identificacion_tributaria, nro_transportes, horarios_atencion, informacion_contactos, email} = req.body
    const nuevacooperativa = {
        nombre_cooperativa, 
        nro_identificacion_tributaria, 
        nro_transportes, 
        horarios_atencion, 
        informacion_contactos, 
        email
    }
    await orm.cooperativa.findOne({ where: { id_cooperativa: id_cooperativa } })
        .then(actualizar => {
            actualizar.update(nuevacooperativa)
        })
    req.flash('success', 'Actualizado con éxito')
    res.redirect('/cooperativa/lista')
}

cooperativa.eliminar = async(req, res) => {
    const ids = req.params.id
    await orm.cooperativa.destroy({ where: { id_cooperativa: ids } })
        .then(() => {
            req.flash('success', 'Eliminado con éxito')
            res.redirect('/cooperativa/lista')
        })
}

module.exports  = cooperativaCtl