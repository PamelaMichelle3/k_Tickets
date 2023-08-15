const cooperativa = (sequelize, type) => {
    return sequelize.define('cooperativas', {
        id_cooperativa: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombres_cooperativa: type.STRING,
        numero_identificacion_cooperativa: type.STRING,
        numero_transporte_cooperativa: type.STRING,
        horario_cooperativa: type.STRING,
        contactos_cooperativa: type.STRING,
        email_cooperativa: type.STRING,
    

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
    });
}
module.exports = cooperativa