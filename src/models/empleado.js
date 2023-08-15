const Empleado =(sequelize, type) =>{
    return sequelize.define('empleados',{
        id_empleado:{
            type: type.INTEGER, 
            primarykey: true,
            autoIncrement: true
        },
        cedulaEmpleado: type.INTEGER,
        nombresEmpleado: type.STRING,
        apellidosEmpleado: type.STRING,
        fecha_nacimientoEmpleado: type.DATE,
        sexoEmpleado: type.STRING,
        callepEmpleado: type.STRING,
        callesEmpelado: type.STRING,
        correoEmpleado: type.STRING,
        celularEmpleado: type.INTEGER,
        convencionalEmpleado: type.INTEGER,
        areaEmpleado: type.STRING,

    crearEmpleado: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false 
        },
    
    actualizarEmpleado: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        }   
    }, {
        timestamps: false, 

    })
}
module.exports = Empleado