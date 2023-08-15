const encargado = (sequelize, type) => {
    return sequelize.define('encargados', {
        id_encargado: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombres_encargado: type.STRING,
        apellido_encargado: type.STRING,
        cedula_encargado: type.STRING,
        sexo_encargado: type.STRING,
       celular_encargado: type.STRING,
       telefono_encargado: type.STRING,
       

        crearEncargado: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizarEncargado: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        }
    }, {
        timestamps: false,
    });
}
module.exports = encargado