const Cooperativa =(sequelize, type) =>{
    return sequelize.define('cooperativas',{
        id_cooperativa:{
            type: type.INTEGER, 
            primarykey: true,
            autoIncrement: true
        },
        nombreCooperativa: type.STRING,
        nro_identificacion_tributariaCooperativa: type.INTEGER,
        nro_transportesCooperativa: type.INTEGER,
        horarios_atencionCooperativa: type.DATETIME,
        informacion_contactosCooperativa: type.STRING,
        emailCooperativa: type.STRING,
    crearCooperativa: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false 
        },
        actualizarCooperativa: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        }   
    }, {
        timestamps: false, 

    })
}
module.exports = Cooperativa 