const detalle_encomienda = (sequelize, type) => {
    return sequelize.define('detalle_encomiendas', {
        id_detalle_encomienda: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombres_cooperativa_detalle_encomienda: type.STRING,
        tamaño_detalle_encomienda: type.STRING,
        fecha_envio_detalle_encomienda: type.STRING,
        numero_registro_detalle_encomienda: type.STRING,
        peso_detalle_encomienda: type.STRING,
    

        crearDetalleEncomienda: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizarDetalleEncomienda: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        }
    }, {
        timestamps: false,
    });
}
module.exports = detalle_encomienda