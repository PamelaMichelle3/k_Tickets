const Bus =(sequelize, type) =>{
    return sequelize.define('buses',{
        id_bus:{
            type: type.INTEGER, 
            primarykey: true,
            autoIncrement: true
        },
        nombreConductorBus: type.STRING,
        capacidadBus: type.INTEGER,
        horariosBus: type.DATETIME,
        placaBus: type.INTEGER,

    crearBus: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false 
        },
        actualizarBus: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        }   
    }, {
        timestamps: false, 

    })
}
module.exports = Bus 