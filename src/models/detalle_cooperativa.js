const detalle_cooperativa = (sequelize, type) => {
    return sequelize.define('detalle_cooperativas', {
        id_detalle_cooperativa: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombres_detalle_cooperativa: type.STRING,
        apellidos_detalle_cooperativa: type.STRING,
        email_detalle_cooperativa: type.STRING,
    

        crearDetalleCooperativa: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizarDetalleCooperativa: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        }
    }, {
        timestamps: false,
    });
}
module.exports = detalle_cooperativa