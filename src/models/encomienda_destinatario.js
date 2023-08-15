const encomienda_destinatario = (sequelize, type) => {
    return sequelize.define('encomienda_destinatarios', {
        id_encomienda_destinatario: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombres_encomienda_destinatario: type.STRING,
        cedula_encomienda_destinatario: type.STRING,
        calle_principal_encomienda_destinatario: type.STRING,
        calle_secundaria: type.STRING,
       telefono_encomienda_destinatario: type.STRING,
       numero_casa_encomienda_destinatario: type.STRING,

        crearEncomienda_destinatario: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizarEncomienda_destinatario: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        }
    }, {
        timestamps: false,
    });
}
module.exports = encomienda_destinatario