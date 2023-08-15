const ciudad=(sequelize,type)=>{
    return sequelize.define('ciudades',{
        id_ciudad:{
            type:type.INTEGER,
            primaryKey:true,
            autoIncrement:true 
        },
        nombre_ciudad: type.STRING,
        provincia_ciudad: type.STRING,
        canton_ciudad: type.STRING,

        crearCiudad:{
            type:'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull:false
        },
        actualizarCiudad:{
            type:'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull:false
        }
    }, {
        timestamps:false,
    });
}
module.exports = ciudad