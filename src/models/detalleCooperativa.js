const detalleCooperativa =(sequelize, type) =>{
    return sequelize.define('detallescooperativas',{
        id_detallecooperativa:{
            type: type.INTEGER, 
            primarykey: true,
            autoIncrement: true
        },
        nombreDetalleCooperativa: type.STRING,
        apellidoDetalleCooperartiva: type.STRING,
        correoDetalleCooperativa: type.STRING,
       
    crearDetalleCooperativa: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false 
        },
        actualizarDetalleCooperativa: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        }   
    }, {
        timestamps: false, 

    })
}
module.exports = detalleCooperativa