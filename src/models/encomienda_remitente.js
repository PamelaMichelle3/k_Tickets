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
        //detalle encomienda
        nombres_cooperativa_detalle_encomienda: type.STRING,
        tamano_detalle_encomienda: type.STRING,
        fecha_envio_detalle_encomienda: type.STRING,
        numero_registro_detalle_encomienda: type.STRING,
        peso_detalle_encomienda: type.STRING,
        //encomienda destinatario
        nombres_encomienda_destinatario: type.STRING,
        cedula_encomienda_destinatario: type.STRING,
        calle_principal_encomienda_destinatario: type.STRING,
        calle_secundaria: type.STRING,
       telefono_encomienda_destinatario: type.STRING,
       numero_casa_encomienda_destinatario: type.STRING,


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