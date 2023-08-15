const Ciudad =(sequelize, type) =>{
    return sequelize.define('ciudades',{
        id_ciudad:{
            type: type.INTEGER, 
            primarykey: true,
            autoIncrement: true
        },
        nombreCiudad: type.STRING,
        provinciaCiudad: type.STRING,
        cantonCiudad: type.DATETIME,
     
    crearCiudad: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false 
        },
        actualizarCiudad: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        }   
    }, {
        timestamps: false, 

    })
}
module.exports = Ciudad 