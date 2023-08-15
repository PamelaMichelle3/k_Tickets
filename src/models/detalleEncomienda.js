const detalleEncomienda =(sequelize, type) =>{
    return sequelize.define('detalleencomienda',{
        id_detalleencomienda:{
            type: type.INTEGER, 
            primarykey: true,
            autoIncrement: true
        },
        nombreCooperativaDetalleEncomienda: type.STRING,
        tamañoDetalleEncomienda: type.INTEGER,
        fechaEnvioDetalleEncomienda: type.DATE,
        nroRegistroTransporteDetalleEncomienda: type.INTEGER,
        pesoDetalleEncomienda: type.FLOAT,

    crearDetalleEncomienda: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false 
        },
        actualizarDetalleEncomienda: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        }   
    }, {
        timestamps: false, 

    })
}
module.exports = detalleEncomienda