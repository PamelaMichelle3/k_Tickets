const encomiendaDestinatario =(sequelize, type) =>{
    return sequelize.define('encomiendadestinatarios',{
        id_destinatario:{
            type: type.INTEGER, 
            primarykey: true,
            autoIncrement: true
        },
        nombresCompletosEncomiendaDestinatario: type.STRING,
        cedulaEncomiendaDestinatario: type.INTEGER,
        callepEncomiendaDestinatario: type.STRING,
        callesEncomiendaDestinatario: type.STRING,
        nroCasaEncomiendaDestinatario: type.INTEGER,
        telefonoEncomiendaDestinatario: type.INTEGER,

        crearEncomiendaDestinatario: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false 
        },
        actualizarEncomiendaDestinatario: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        }   
    }, {
        timestamps: false, 

    })
}
module.exports = encomiendaDestinatario