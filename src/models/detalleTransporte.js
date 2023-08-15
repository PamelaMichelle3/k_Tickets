const detalleTransporte =(sequelize, type) =>{
    return sequelize.define('detallestrasportes',{
        id_detalletransporte:{
            type: type.INTEGER, 
            primarykey: true,
           
        },
        nombreCooperativaDetalleTransporte: type.STRING,
        tarifaDetalleTransporte: type.INTEGER,
        nombreCopilotoDetalleTransporte: type.STRING,
     
    crearDetalleTransporte: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false 
        },
        actualizarDetalleTransporte: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        }   
    }, {
        timestamps: false, 

    })
}
module.exports = detalleTransporte