const Encargado =(sequelize, type) =>{
    return sequelize.define('encargados',{
        id_encargado:{
            type: type.INTEGER, 
            primarykey: true,
            autoIncrement: true
        },
        nombresEncargado: type.STRING,
        apellidosEncargado: type.STRING,
        cedulaEncargadO: type.INTEGER,
        sexoEncargado: type.STRING,
        celularEncargado: type.STRING,
        convencionalEncargado: type.STRING,
     
    crearEncargado: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false 
        },
        actualizarEncargado: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        }   
    }, {
        timestamps: false, 

    })
}
module.exports = Encargado  