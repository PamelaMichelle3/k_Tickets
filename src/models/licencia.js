const Licencia =(sequelize, type) =>{
    return sequelize.define('licencias',{
        id_licencia:{
            type: type.INTEGER, 
            primarykey: true,
            autoIncrement: true
        },
        tipoLicencia: type.STRING,
        fecha_emisionLicencia: type.DATE,
        fecha_vencimientoLicencia: type.DATE,

    crearLicencia: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false 
        },
        actualizarLicencia: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        }   
    }, {
        timestamps: false, 

    })
}
module.exports = Licencia