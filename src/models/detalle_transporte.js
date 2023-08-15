const detalle_transporte = (sequelize, type) => {
    return sequelize.define('detalle_transportes', {
        id_detalle_transporte: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombres_cooperativa_detalle_transporte: type.STRING,
        tarifa_detalle_transporte: type.STRING,
        nombre_copiloto_detalle_transporte: type.STRING,
      

        crearDetalleTransporte: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizarDetalleTransporte: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        }
    }, {
        timestamps: false,
    });
}
module.exports = detalle_transporte