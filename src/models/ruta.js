const ruta = (sequelize, type) => {
    return sequelize.define('rutas', {
        id_ruta: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        partida_ruta: type.STRING,
        destina_ruta: type.STRING,
        horario_ruta: type.STRING,

        crearRuta: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizarRuta: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        }
    }, {
        timestamps: false,
    });
}
module.exports = ruta