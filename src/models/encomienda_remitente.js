const encomienda_remitente = (sequelize, type) => {
    return sequelize.define('encomienda_remitentes', {
        id_encomienda_remitente: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombres_encomienda_remitente: type.STRING,
        cedula_encomienda_remitente: type.STRING,
        telefono_encomienda_remitente: type.STRING,
        email_encomienda_remitente: type.STRING,

        crearEncomienda_remitente: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizarEncomienda_remitente: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        }
    }, {
        timestamps: false,
    });
}
module.exports = encomienda_remitente