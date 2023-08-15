const bus=(sequelize,type)=>{
    return sequelize.define('buses',{
        id_bus:{
            type:type.INTEGER,
            primaryKey:true,
            autoIncrement:true 
        },
        nombre_bus: type.STRING,
        capacidas_bus: type.STRING,
        horario_bus: type.STRING,
       placa_bus: type.STRING,

        crearBus:{
            type:'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull:false
        },
        actualizarBus:{
            type:'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull:false
        }
    }, {
        timestamps:false,
    });
}
module.exports = bus