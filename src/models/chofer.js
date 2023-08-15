const Chofer =(sequelize, type) =>{
    return sequelize.define('choferes',{
        id_chofer:{
            type: type.INTEGER, 
            primarykey: true,
            autoIncrement: true
        },
        cedulaChofer: type.INTEGER,
        nombresChofer: type.STRING,
        apellidosChofer: type.STRING,
        sexoChofer: type.STRING,
        estado_civilChofer: type.STRING,
        fecha_nacimientoChofer: type.DATE,
        direccionChofer: type.STRING,
        emailChofer: type.STRING,
        celularChofer: type.INTEGER,

    crearChofer: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false 
        },
    
    actualizarChofer: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        }   
    }, {
        timestamps: false, 

    })
}
module.exports = Chofer