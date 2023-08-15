const Ruta =(sequelize, type) =>{
    return sequelize.define('rutas',{
        id_ruta:{
            type: type.INTEGER, 
            primarykey: true,
            autoIncrement: true
        },
        nombrePartidaRuta: type.STRING,
        nombreDestinoRuta: type.STRING,
        horarioRuta: type.DATETIME,
        
    crearRuta: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false 
        },
        actualizarRuta: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        }   
    }, {
        timestamps: false, 

    })
}
module.exports = Ruta 