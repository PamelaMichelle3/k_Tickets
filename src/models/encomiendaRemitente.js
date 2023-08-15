const EncomiendaRemitente =(sequelize, type) =>{
    return sequelize.define('encomiendaremitente',{
        id_encomienda:{
            type: type.INTEGER, 
            primarykey: true,
            autoIncrement: true
        },
        nombresCompletosEncomiendaRemitente: type.STRING,
        cedulaEncomiendaRemitente: type.INTEGER,
        telefonoEncomiendaRemitente: type.INTEGER,
        correoEncomiendaRemitente: type.STRING,
        
        crearEncomiendaRemitente: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false 
        },
        actualizarEncomiendaRemitente: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        }   
    }, {
        timestamps: false, 

    })
}
module.exports = EncomiendaRemitente